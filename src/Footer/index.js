import React, { Component } from 'react';
import styled from '@emotion/styled';

const Perimeter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #F8F9FA;
  color: grey;
  text-align: center;
`;

class Footer extends Component {
  state = {};

  render() {
    return (
      <Perimeter>
        <p>&copy; {new Date().getFullYear()} Chris Fetterolf</p>
      </Perimeter>
    )
  }
}

export default Footer;
