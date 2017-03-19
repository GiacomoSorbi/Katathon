import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import '../styles/global.scss';

const Page = (props) => {
  return (
    <div className="banner-image">
      <div className="overlay">
        <Header/>
          {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;