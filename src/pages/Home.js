import React, { Fragment, useContext, useEffect } from 'react'
import { Card } from '@blueprintjs/core'

import { START_LOAD_NEXT_KATA, COMPLETE_LOAD_NEXT_KATA } from '../store/actiontypes'
import { StateContext } from '../store/reducer'

// Need to stick a little more error handling on this
const getNextKatathon = async (dispatch) => {
  dispatch({ type: START_LOAD_NEXT_KATA })
  const nextKatathon = await fetch('api/katathon/')
    .then((data) => data.json())
  const { _id, date, dateCreated } = nextKatathon.data

  const payload = {
    _id,
    date,
    dateCreated
  }
  dispatch({ type: COMPLETE_LOAD_NEXT_KATA, payload })
}

const Home = () => {
  const [state, dispatch] = useContext(StateContext)

  useEffect(() => {
    getNextKatathon(dispatch)
  }, [])

  const renderTimer = () => {
    const timeUntilKatathon = parseInt(state.nextKatathon.date, 10) - Date.now().valueOf()
    return (
      <Fragment>
        <p>Next Katathon starting in</p>
        <p>{timeUntilKatathon}</p>
      </Fragment>
    )}

  const renderNoKathonMessage = () => (
    <p>Sorry. There are no upcoming katathons. Come back later to find out when the next katathon is on</p>
  )

  const isNextkatathon = Boolean(state.nextKatathon._id)

  return (
    <Card>
      <h1>Welcome to the Katathon app</h1>
      {isNextkatathon ? renderTimer() : renderNoKathonMessage()}
    </Card>
  )
}

export default Home
