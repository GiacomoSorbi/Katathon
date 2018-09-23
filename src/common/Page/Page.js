import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import '../../styles/index.scss'

const Page = (props) => {
  return (
    <div className="banner-image">
      <div className="overlay">
        <Header />
          {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Page
