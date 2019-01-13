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
          <h3 className="display-6">Learning Git</h3>
          <div className="row">
            <div className="col-12">
              <SectionBody>
                Before jumping into any open source project, head over to egghead.io and take this free tutorial by Kent C. Dodds, which
                teaches you basic git skills like cloning a repository, making a new branch, and creating your pull request (a proposed change to the code).  Although
                git can be confusing at first, it gets easier with time and is crucial to anyone who wants to contribute to a shared codebase.
              </SectionBody>
              <LinkBox
                link="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
                title="How to Contribute to an Open Source Project on GitHub"
                desc='"Feel free to submit a PR!" - words often found in GitHub issues, but met with confusion and fear by many. Getting…'
                site="egghead.io"
              />
            </div>
          </div>
        </Section>
        <Section>
          <h3 className="display-6">Potential Projects</h3>
          <div className="row">
            <div className="col-12">
              <SectionBody>
                Before jumping into any open source project, head over to egghead.io and take this free tutorial by Kent C. Dodds, which
                teaches you basic git skills like cloning a repository, making a new branch, and creating your pull request (a proposed change to the code).  Although
                git can be confusing at first, it gets easier with time and is crucial to anyone who wants to contribute to a shared codebase.
              </SectionBody>

            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default GettingStarted;
