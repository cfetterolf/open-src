import React, { Component } from 'react';
import styled from '@emotion/styled'
import Intro from './Intro';
import GettingStarted from './GettingStarted';
import Django from './Django';

const Container = styled.div`
  margin-top: 20px;
  height: 100vh;
  border-radius: 20px;
  box-shadow: 0 0 10px 3px rgba(0,0,0, 0.07);
`;

class Main extends Component {
  state = {};

  render() {
    const { page } = this.props;

    let content;
    switch(page) {
      case 'intro':
        content = <Intro/>
        break;
      case 'start':
        content = <GettingStarted/>
        break;
      case 'django':
        content = <Django/>
        break;
      default:
        content = <div>Error: Please Refresh Page</div>
    }

    return (
      <Container className="container container-fluid bg-light">
        {content}
      </Container>
    );
  }
}

export default Main;
