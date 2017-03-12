import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from './Footer';
import Header from './Header';

import '../styles/global.scss';

const Page = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer />
    </div>
  );
};

export default Page;