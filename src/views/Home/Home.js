import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Page from '../../common/Page/Page'
import Timer from '../../containers/TimerContainer/TimerContainer'
import Button from '../../common/Button/Button'

export default class Home extends Component {
  componentDidMount() {
    this.props.onLoadTestData()
  }

  render() {
    return (
      <Page>
        <Timer/>
        <div>
          <p>{this.props.test}</p>
          <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
          <Link to="/about"><Button buttonType="secondary-button" alignment="left">Find out more...</Button></Link>
        </div>
      </Page>
    )
  }
}
