import React, {Component} from 'react';
import Katathon from './Katathon';

class KatathonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katas: [
        {
          title: 'Shortest Word',
          link: 'https://www.codewars.com/kata/shortest-word'
        },
        {
          title: 'Remove Exclamation Marks',
          link: 'https://www.codewars.com/kata/remove-exclamation-marks'
        },
        {
          title: 'Is Really NaN',
          link: 'https://www.codewars.com/kata/isreallynan/'
        },
        {
          title: 'n-th Power',
          link: 'https://www.codewars.com/kata/n-th-power/'
        },
        {
          title: 'Make a Function That Does Arithmetic',
          link: 'https://www.codewars.com/kata/make-a-function-that-does-arithmetic'
        },
        {
          title: 'How Many e-mails We Sent Today',
          link: 'https://www.codewars.com/kata/how-many-e-mails-we-sent-today/'
        },
        {
          title: 'String to List of Integers',
          link: 'https://www.codewars.com/kata/string-to-list-of-integers/'
        },
        {
          title: 'Circle Area Inside Square',
          link: 'https://www.codewars.com/kata/circle-area-inside-square/'
        },
        {
          title: 'What The Biggest Search Keys',
          link: 'https://www.codewars.com/kata/what-the-biggest-search-keys/'
        },
        {
          title: 'How Many Points Did The Teams from Los Angeles Score',
          link: 'https://www.codewars.com/kata/how-many-points-did-the-teams-from-los-angeles-score/'
        },
        {
          title: 'Cut Array Into Smaller Parts',
          link: 'https://www.codewars.com/kata/cut-array-into-smaller-parts/'
        },
        {
          title: 'Remove HTML Tags U sing Regexp',
          link: 'https://www.codewars.com/kata/remove-html-tags-using-regexp/'
        },
        {
          title: 'Simple Fun Number 165 Withdraw',
          link: 'https://www.codewars.com/kata/simple-fun-number-165-withdraw/'
        },
        {
          title: 'Simple Fun Number 160 Cut The Ropes',
          link: 'https://www.codewars.com/kata/simple-fun-number-160-cut-the-ropes/'
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
  }
  render() {
    return <Katathon katas={this.state.katas} participants={this.state.participants} />
  }
}

export default KatathonData;

'https://www.codewars.com/kata/shortest-word'
'https://www.codewars.com/kata/remove-exclamation-marks'
'https://www.codewars.com/kata/isreallynan/'
'https://www.codewars.com/kata/n-th-power/'
'https://www.codewars.com/kata/make-a-function-that-does-arithmetic'
'https://www.codewars.com/kata/shortest-word/'
'https://www.codewars.com/kata/how-many-e-mails-we-sent-today/'
'https://www.codewars.com/kata/string-to-list-of-integers/'
'https://www.codewars.com/kata/circle-area-inside-square/'
'https://www.codewars.com/kata/what-the-biggest-search-keys/'
'https://www.codewars.com/kata/how-many-points-did-the-teams-from-los-angeles-score/'
'https://www.codewars.com/kata/cut-array-into-smaller-parts/'
'https://www.codewars.com/kata/remove-html-tags-using-regexp/'
'https://www.codewars.com/kata/simple-fun-number-165-withdraw/'
'https://www.codewars.com/kata/simple-fun-number-160-cut-the-ropes/'