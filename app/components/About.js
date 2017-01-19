import React from 'react';
import Container from './Container';
import Headline from './Headline';

const About = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Headline>
            <h2>More Info</h2>
            <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
            <p>We do this using coding challenge platforms such as codewars.com through meetups organised on meetup.com.  To join us, start by [joining one of our meetups].</p>
            <p>Why do we focus on coding challenges over project-based learning?</p>
            <p>First of all, there are plenty of platforms and meetups offering project-based learning and these should not be overlooked by new developers wishing to build a great portfolio.  They are a great place to start, but coding challenges are a learning accelerant.  Today’s software developers are required to be extremely adaptable problem-solvers.  Coding challenges help developers to explore and improve their knowledge of programming concepts outside of a project environment and contribute to a deeper knowledge of individual languages and the components in software design patterns.  The abstract problems presented by coding challenges also allow programmers to develop better problem solving strategies, which can help them not only with programming itself, but in developing more effective learning strategies for the huge array of tools used in modern software projects.</p>
            <p>Coding challenges are a great supplement to project-based learning and, here at katathon.org, we believe their value should not be overlooked.</p>
          </Headline>
        </Container>
      </div>
    </div>
  );
};

module.exports = About;
