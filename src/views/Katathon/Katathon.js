import React from 'react'

import Page from '../../common/Page/Page'
import Leaderboard from '../../components/LeaderBoard/Leaderboard'
import KataList from '../../components/KataList/KataList'

const Katathon = (props) => (
  <Page>
    <h2>Welcome to today's Katathon!</h2>
    <Leaderboard title='Leaderboard' data={props.participants} />
    <KataList title='Kata List' data={props.katas} />
  </Page>
)

export default Katathon
