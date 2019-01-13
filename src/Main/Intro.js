import React, { Component } from 'react';
import styled from '@emotion/styled';
import linux from '../img/linux.jpg';

export const Section = styled.div`
  padding: 20px;
`;

export const SectionBody = styled.p`
  padding: 10px;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
`;

export const LinkBox = styled.div`
  padding: 10px;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
  background-color: white;
`;


class Intro extends Component {
  state = {};

  render() {
    return (
      <div>
        <Section>
          <h3 className="display-6">What is Open Source?</h3>
          <div className="row">
            <SectionBody className="col-12 col-md-6">
              Open Source Software is a computer software whose source code is made
              publicly available for modification and enhancements. It is released under
              various licenses like BSD, MIT etc. <a href="https://opensource.com/resources/what-open-source" target="_blank">Click here</a> to
              learn more.
            </SectionBody>
            <SectionBody className="col-12 col-md-6">
              <Image src={linux} />
            </SectionBody>
          </div>
        </Section>

        {/* No Experience? */}
        <Section>
          <h3 className="display-6">I Have No Experience, Can I Still Contribute?</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <SectionBody>
                You can find open source projects anywhere and everywhere, and most are looking
                for contributors, regardless of your level of experience.  <a href="https://opensource.com/resources/what-open-source" target="_blank">
                This article</a> on Medium makes a great argument for why a new developer should jump right into open source, even though making
                contributions to a "real" codebase can seem daunting.
              </SectionBody>
              <SectionBody>
                <strong>The TL;DR of the article: </strong>It’s okay to start slowly and work
                your way up--every project can use help, even if it's just updating documentation at first.  You don’t want your first contribution to
                be some great contribution to some great codebase; you want your first contribution to be now.
              </SectionBody>
            </div>
            <SectionBody className="col-12 col-md-6">
            <LinkBox>
              <a
                href="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0"
                data-href="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0"
                title="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0"
                rel="nofollow"
                target="_blank"
                style={{color: 'gray', textDecoration: 'none'}}
              >
                <strong style={{color: '#282828'}}>
                  Why You Should Contribute to Open Source Software Right Now
                </strong>
                <br/>
                <div style={{marginTop: '10px'}}>
                  For a budding software developer, contributing to open source seems exciting but daunting. I know this because...
                </div>
                <br/>
                <em>Medium.com</em>
              </a>
            </LinkBox>
            </SectionBody>
          </div>
        </Section>
        <Section>
          <h3 className="display-6">First Steps</h3>
          <div className="row">
            <div className="col-12">
              <SectionBody>
                Head over to the <a href="#" onClick={() => this.props.selectPage('start')}>
                Getting Started</a> section of the site for some tutorials, developer tips and tricks, and projects to get you
                ramped up and ready to contribute.
              </SectionBody>
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default Intro;
