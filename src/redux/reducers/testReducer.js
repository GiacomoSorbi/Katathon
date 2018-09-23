import { SET_TEST } from '../actions/types'

export default function (state = {}, action) {
  switch(action.type) {
    case SET_TEST:
      return {
        ...state,
        testData: action.payload.title
      }
    default:
      return state
  }
}
