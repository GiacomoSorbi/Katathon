import https from 'https'

import Katathon from '../models/katathonModel'

const getHistoricCompletedKatas = (userName, totalPages) => {
  // If all requests resloved then the Promise.all will resolved and return an array
  // of histically completed kata ids. If one fails then the Promise.all will reject.
  // This will result in no updated score for that user
  return Promise.all(
    Array.from({ length: totalPages - 1 }, (el, i) => {
      // Request is wrapped in a promise so that Promise.all can run when all requests
      // have resolved
      return new Promise((resolve, reject) => {
        https.get(
          `https://www.codewars.com/api/v1/users/${userName}/code-challenges/completed?page=${i}`,
          (httpsResponse) => {
            try {
              if (httpsResponse.statusCode !== 200) {
                throw new Error(`
                Request Failed.
                Status Code: ${httpsResponse.statusCode}
                API: code-challenge.
                User: ${userName}
                Page: ${i}
                `)
              }
            } catch (err) {
            // Log err
              reject()
            }
            let data = ''

            httpsResponse.on('data', (chunk) => {
              data += chunk
            })

            httpsResponse.on('end', () => {
              try {
                const response = JSON.parse(data)
                if (response.success === false) {
                  throw new Error('User not found')
                }
                resolve(response)
              } catch (err) {
                // Log err
                reject()
              }
            })
          }
        )
      })
    })
  )
    .then(
      allResponses => allResponses
        .map(response => response.data.map(kata => kata.id))
    )
}

const getCompletedKatas = (userName) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://www.codewars.com/api/v1/users/${userName}/code-challenges/completed`,
      (httpsResponse) => {
        try {
          if (httpsResponse.statusCode !== 200) {
            throw new Error(`
            Request Failed.
            Status Code: ${httpsResponse.statusCode}
            API: code-challenge.
            User: ${userName}
            Page: 0
            `)
          }
        } catch (err) {
        // Log err
          reject()
        }
        let data = ''

        httpsResponse.on('data', (chunk) => {
          data += chunk
        })

        httpsResponse.on('end', () => {
          try {
            const response = JSON.parse(data)
            if (response.success === false) {
              throw new Error('User not found')
            }

            // Adds completed kata ids to an array
            let completed = response.data.map(kata => kata.id)
            if (response.totalPages === 1) {
              resolve(completed)
            } else {
            // If there is more than one page of results all other pages must
            // also be requested
              getHistoricCompletedKatas(userName, response.totalPages)
                .then((historicCompleted) => {
                  completed = [...completed, ...historicCompleted]
                  resolve(completed)
                })
                .catch((err) => {
                  reject(err)
                })
            }
          } catch (err) {
            // If the user is not found it may indicate that their account has
            // been deleted
            // Log err
            reject()
          }
        })
      }
    )
  })
}

export const updateAllScores = async (katathonId) => {
  try {
    const katathon = await Katathon.findById(katathonId)
    const { users, katas } = katathon
    if (!users.length || !katas.length) {
      return
    }
    // Compiles a list of all ongoing userScore requests. Once they have all
    // updated and resolved the new data is written to db
    Promise.all(users.map((user) => {
      // This promise must always resolve so that if one user request fails the
      // other scores will still be updated. Currently a deleted account will fail
      return new Promise(async (resolve) => {
        try {
          const completed = await getCompletedKatas(user.userName)

          // This checks that no requests for completed katas have failed
          if (!Array.isArray(completed)) {
            throw new Error(`Failed to get completed katas for ${user.userName}`)
          }

          // Loops through katas and adds score when they are found in completed
          const userScore = katas.reduce((acc, kata) => completed.includes(kata.kataId)
            ? acc + kata.score
            : acc, 0)

          // Updates model where appropriate
          if (userScore !== user.userScore) {
            katathon.users = katathon.users.map((existingUser) => {
              return existingUser.userName === user.userName
                ? { ...existingUser._doc, userScore }
                : existingUser
            })
          }
          resolve()
        } catch (err) {
          // Log err
          resolve()
        }
      })
    }))
      .then(async () => {
        try {
          await katathon.save()
        } catch (err) {
          // Log err
        }
      })
  } catch (err) {
    // Log err
  }
}
