import React, { Component } from 'react';
import styled from '@emotion/styled';
import {
  Section,
  SectionBody,
  Image,
  LinkBox
} from './Intro';
import openHatch from '../img/openhatch.png';
import mozilla from '../img/mozilla.png';

const ProjectDivide = styled.div`
  height: ${props => props.height ? props.height : '50px'};
`;

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
          <h3 className="display-6">Projects</h3>
          <SectionBody>
            Below is a list of tools and projects to help get you started contributing to open source.  This is by no means a comprehensive list, so feel free to do more
            research on your own before settling on a project to work on.
          </SectionBody>

          <ProjectDivide height="20px"/>

          <Project title="OpenHatch" imgSrc={openHatch} width="70%">
            <SectionBody>
              <a href="https://openhatch.org/" target="_blank">OpenHatch</a> is a non-profit dedicated to matching prospective free software contributors with communities,
              tools, and education, while also providing online tools for new contributors.
            </SectionBody>
            <SectionBody>
              It's perfect for beginners, as they will help you find a project based on a number of criteria such as language or the toughness
              of bugs.  Head over to OpenHatch's <a href="https://openhatch.org/search/" target="_blank">search page</a> to try it out for yourself.
            </SectionBody>
          </Project>

          <ProjectDivide/>

          <Project title="Mozilla" imgSrc={mozilla} width="50%" offset>
            <SectionBody>
              While known primarily for Firefox, <a href="https://mozilla.org/" target="_blank">Mozilla</a> has various open source projects like JS Engine, Devtools, and Firefox OS in addition to
              their open source web browser.  You can head over to Mozilla's <a href="https://codetribute.mozilla.org/" target="_blank">Contributing to Mozilla</a> page to get started.  This site is meant particularly for new contributors that categorizes the ‘Easy bugs’ and ‘Mentored Bugs’ based on project,
              and allows you to filter by language.
            </SectionBody>
            <SectionBody>
              Alternatively, <a href="https://www.whatcanidoformozilla.org/" target="_blank">this site</a> suggests you projects based on the programming skill you select. Once you make your choice, it takes you to the respective mozilla project.
            </SectionBody>
          </Project>

          <ProjectDivide/>

          <Project title="OpenHatch" imgSrc={openHatch} width="70%">
            <SectionBody>
              <a href="https://openhatch.org/" target="_blank">OpenHatch</a> is a non-profit dedicated to matching prospective free software contributors with communities,
              tools, and education, while also providing online tools for new contributors.
            </SectionBody>
            <SectionBody>
              It's perfect for beginners, as they will help you find a project based on a number of criteria such as language or the toughness
              of bugs.  Head over to OpenHatch's <a href="https://openhatch.org/search/" target="_blank">search page</a> to try it out for yourself.
            </SectionBody>
          </Project>
          <ProjectDivide/>
        </Section>
      </div>
    )
  }
}

const Project = ({ title, imgSrc, children, offset, width }) => {
  if (imgSrc) {
    return !offset ? (
      <div className="row" style={{marginTop: 20}}>
        <div className="col-md-6 col-12">
          <h4 className="display-8">{title}</h4>
          {children}
        </div>
        <div className="col-md-6 col-12">
          <Image src={imgSrc} width={width} />
        </div>
      </div>
    ) : (
      <div className="row" style={{marginTop: 20}}>
        <div className="col-md-6 col-12">
          <Image src={imgSrc} width={width} />
        </div>
        <div className="col-md-6 col-12">
          <h4 className="display-8">{title}</h4>
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="row" style={{marginTop: 20}}>
      <div className="col-12">
        <h4 className="display-8">{title}</h4>
        {children}
      </div>
    </div>
  );
}


export default GettingStarted;
