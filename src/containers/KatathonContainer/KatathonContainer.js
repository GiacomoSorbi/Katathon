import React, { Component } from 'react'

import Katathon from '../../views/Katathon/Katathon'

class KatathonData extends Component {
  state = {
    katas: [
      {
        title: 'Shortest Word',
        link: 'https://www.codewars.com/kata/shortest-word',
        score: 2
      },
      {
        title: 'Remove Exclamation Marks',
        link: 'https://www.codewars.com/kata/remove-exclamation-marks',
        score: 2
      },
      {
        title: 'Is Really NaN',
        link: 'https://www.codewars.com/kata/isreallynan/',
        score: 2
      },
      {
        title: 'n-th Power',
        link: 'https://www.codewars.com/kata/n-th-power/',
        score: 3
      },
      {
        title: 'Make a Function That Does Arithmetic',
        link: 'https://www.codewars.com/kata/make-a-function-that-does-arithmetic',
        score: 3
      },
      {
        title: 'How Many e-mails We Sent Today',
        link: 'https://www.codewars.com/kata/how-many-e-mails-we-sent-today/',
        score: 5
      },
      {
        title: 'String to List of Integers',
        link: 'https://www.codewars.com/kata/string-to-list-of-integers/',
        score: 5
      },
      {
        title: 'Circle Area Inside Square',
        link: 'https://www.codewars.com/kata/circle-area-inside-square/',
        score: 7
      },
      {
        title: 'What The Biggest Search Keys',
        link: 'https://www.codewars.com/kata/what-the-biggest-search-keys/',
        score: 7
      },
      {
        title: 'How Many Points Did The Teams from Los Angeles Score',
        link: 'https://www.codewars.com/kata/how-many-points-did-the-teams-from-los-angeles-score/',
        score: 10
      },
      {
        title: 'Cut Array Into Smaller Parts',
        link: 'https://www.codewars.com/kata/cut-array-into-smaller-parts/',
        score: 10
      },
      {
        title: 'Remove HTML Tags U sing Regexp',
        link: 'https://www.codewars.com/kata/remove-html-tags-using-regexp/',
        score: 10
      },
      {
        title: 'Simple Fun Number 165 Withdraw',
        link: 'https://www.codewars.com/kata/simple-fun-number-165-withdraw/',
        score: 15
      },
      {
        title: 'Simple Fun Number 160 Cut The Ropes',
        link: 'https://www.codewars.com/kata/simple-fun-number-160-cut-the-ropes/',
        score: 20
      }
    ],
    participants: [
      {
        username: 'webtechalex',
        score: 0
      },
      {
        username: 'petegarvin1',
        score: 0
      },
      {
        username: 'coudrew',
        score: 0
      },
      {
        username: 'TroyMaeder',
        score: 0
      },
      {
        username: 'marisid',
        score: 0
      },
      {
        username: 'ijelonek',
        score: 0
      }
    ]
  }

  render() {
    return <Katathon katas={this.state.katas} participants={this.state.participants} />
  }
}

export default KatathonData
