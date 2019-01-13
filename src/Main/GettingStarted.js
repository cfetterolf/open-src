import React, { Component } from 'react';
import {
  Section,
  SectionBody,
  Image,
  LinkBox
} from './Intro';

class GettingStarted extends Component {
  state = {};

  render() {
    return (
      <div>
        <Section>
          <h3 className="display-6">Getting Started</h3>
          <div className="row">
            <div className="col-12">
              <SectionBody>
                You can find open source projects anywhere and everywhere, and most are looking
                for contributors, regardless of your level of experience.  <a href="https://opensource.com/resources/what-open-source" target="_blank">
                This article</a> on Medium makes a great argument for why a new developer should jump right into open source, even though making
                contributions to a "real" codebase can seem daunting.
              </SectionBody>
              <LinkBox>
                <a
                  href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
                  data-href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
                  title="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
                  rel="nofollow"
                  target="_blank"
                  style={{color: 'gray', textDecoration: 'none'}}
                >
                  <strong style={{color: '#282828'}}>
                    How to Contribute to an Open Source Project on GitHub
                  </strong>
                  <br/>
                  <div style={{marginTop: '10px'}}>
                    "Feel free to submit a PR!" - words often found in GitHub issues, but met with confusion and fear by many. Getting…
                  </div>
                  <br/>
                  <em>egghead.io</em>
                </a>
              </LinkBox>
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default GettingStarted;
