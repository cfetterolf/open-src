import React, { Component } from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 20px;
`;

class Intro extends Component {
  state = {};

  render() {
    return (
      <div>
        <Section>
          <h3 className="display-6">What is Open Source?</h3>
        </Section>
        <Section>
          <h3 className="display-6">Example Projects</h3>
        </Section>
        <Section>
          <h3 className="display-6">I Have No Experience, Can I Still Contribute?</h3>
        </Section>
      </div>
    )
  }
}

export default Intro;
