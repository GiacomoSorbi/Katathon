import { createContext } from 'react'

import { HIDE_USERNAME_PROMPT, SHOW_USERNAME_PROMPT } from './actionTypes'

export const initialState = {
  showUsernamePrompt: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_USERNAME_PROMPT:
      return {
        ...state,
        showUsernamePrompt: true
      }
    case HIDE_USERNAME_PROMPT:
      return {
        ...state,
        showUsernamePrompt: false
      }
    default:
      return state
  }
}

export const StateContext = createContext()
