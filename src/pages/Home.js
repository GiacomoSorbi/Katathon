import React, { useContext } from 'react'
import { Button, Card } from '@blueprintjs/core'

import { SHOW_USERNAME_PROMPT, HIDE_USERNAME_PROMPT } from '../store/actiontypes'
import { StateContext } from '../store/reducer'

import './home.scss'

const Home = () => {
  const [state, dispatch] = useContext(StateContext)

  const buttonAction = {
    type: state.showUsernamePrompt ? HIDE_USERNAME_PROMPT : SHOW_USERNAME_PROMPT
  }
  return (
    <Card>
      <h1>Welcome to the Katathon app</h1>
    <p>{state.showUsernamePrompt
      ? 'The username prompt is on'
      : 'The username prompt is off'
    }</p>
      <Button onClick={() => {dispatch(buttonAction)}}>Enter Katathon</Button>
    </Card>
  )
}

export default Home
