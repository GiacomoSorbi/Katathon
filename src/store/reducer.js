import { createContext } from 'react'

import { HIDE_USERNAME_PROMPT, START_LOAD_NEXT_KATA, COMPLETE_LOAD_NEXT_KATA, FAIL_LOAD_NEXT_KATA, SHOW_USERNAME_PROMPT } from './actionTypes'

export const initialState = {
  showUsernamePrompt: false,
  nextKatathon: {
    _id: '',
    date: '',
    dateCreated: ''
  },
  loadingNextKata: false
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
    case START_LOAD_NEXT_KATA:
      return {
        ...state,
        loadingNextKata: true
      }
    case COMPLETE_LOAD_NEXT_KATA:
      return {
        ...state,
        loadingNextKata: false,
        nextKatathon: {
          _id: action.payload._id,
          date: action.payload.date,
          dateCreated: action.payload.dateCreated
        }
      }
    case FAIL_LOAD_NEXT_KATA:
      return {
        ...state,
        loadingNextKata: false
      }
    default:
      return state
  }
}

export const StateContext = createContext()
