import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../redux/actions/index';

import Container from '../components/Container';
import Timer from '../components/Timer';
import Headline from '../components/Headline';
import Button from '../components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  //Just for testing purpose
  componentDidMount() {
    this.props.onLoadTestData();
  }

  navigateToAbout() {
    this.props.router.push(null, '/about');
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Timer/>
        <Headline width='340px'>
        <p>{this.props.test}</p>
          <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
          <Link to="/about"><Button buttonType="secondary-button" alignment="left">Find out more...</Button></Link>
        </Headline>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  console.log(state.testReducer.testData);
  return {
    test: state.testReducer.testData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTestData: () => dispatch(actions.getTestData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);