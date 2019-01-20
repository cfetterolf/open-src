import React, { Component } from 'react';
import styled from '@emotion/styled'
import Intro from './Intro';
import GettingStarted from './GettingStarted';
import Django from './Django';
import Sources from './Sources';

const Container = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px 3px rgba(0,0,0, 0.07);
`;

class Main extends Component {
  state = {};

  render() {
    const { page, selectPage } = this.props;

    let content;
    switch(page) {
      case 'intro':
        content = <Intro {...this.props}/>
        break;
      case 'start':
        content = <GettingStarted {...this.props}/>
        break;
      case 'django':
        content = <Django/>
        break;
      case 'sources':
        content = <Sources/>
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
