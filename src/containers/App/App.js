import React, { useReducer } from 'react'
// import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Home from '../../pages/Home'

import './app.scss'

import { initialState, reducer, StateContext } from '../../store/reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      <main className="app bp3-dark">
        <Home />
      </main>
    </StateContext.Provider>
  )
}

export default hot(module)(App)
