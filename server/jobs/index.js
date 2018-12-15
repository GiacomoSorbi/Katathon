import { scheduleJob } from 'node-schedule'

import { updateAllScores } from '../services/index'

// Ensures job only runs during Katathon
export const newKatathonJob = (timestamp, katathonId) => {
  const start = new Date(timestamp)
  const end = new Date(timestamp)
  end.setHours(end.getHours() + 24)
  scheduleJob(
    {
      start,
      end,
      rule: '*/10 * * * *'
    },
    () => {
      updateAllScores(katathonId)
    }
  )
}
