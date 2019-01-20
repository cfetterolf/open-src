import React, { Component } from 'react';
import styled from '@emotion/styled';
import linux from '../img/linux.jpg';
import qualifications from '../img/qualifications.png';

export const Section = styled.div`
  padding: 20px;
`;

export const SectionBody = styled.p`
  padding: 10px;
`;

export const Image = styled.img`
  width: ${props => props.width? props.width : '100%'};
  height: auto;
  margin: auto;
  display: block;
`;

export const ShadowBox = styled.div`
  padding: 10px;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
  background-color: white;
`;

export const LightText = styled.p`
  color: gray;
  padding: 10px;
`;


class Intro extends Component {
  state = {};

  render() {
    return (
      <div>
        <Section>
          <h3 className="display-6">What is Open Source?</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <SectionBody>
                Open source software is computer software whose source code is made
                publicly available for modification and enhancements. It is released under
                various licenses like BSD, MIT etc. <a href="https://opensource.com/resources/what-open-source" target="_blank">Click here</a> to
                learn more.
              </SectionBody>
              <SectionBody>
                Open source software's authors make its source code available to others who would like to view that code, copy it, learn from it, alter it, or share it.
                Linux, one of the most popular operating systems, is a great example of open source software.
              </SectionBody>
            </div>
            <div className="col-12 col-md-6">
              <Image src={linux}/>
            </div>
          </div>
        </Section>
        <Section>
          <h3 className="display-6">Why Open Source?</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <SectionBody>
                If you want to become a better programmer, contributing to open source is one of the most effective and efficient ways to do so.  In addition
                to simply writing code, reading other developers' code might be the best method to learn new tricks and best practices.
              </SectionBody>
              <SectionBody>
                It also <strong>might just score you an internship</strong>.  Apart from helping you practice important coding and software development skills,
                contributing to open source is a great resume item.  If you want a job as a software engineer, you'll obviously need to interview.
                And at virtually every stage of every interview, you <strong>will</strong> be asked about a past project you've worked on, whether or not one is
                listed on your resume.  Being able to talk about an independent project (i.e. one not required for a class or job) shows a ton of drive and passion,
                two traits employers love to see.  What's more, getting involved with open source specifically shows that you have real experience collaborating in a group setting on
                production-level code.
              </SectionBody>
              <SectionBody>
                <strong>TL;DR</strong>: Working on open source projects is one of the best things you can do to get an internship as a first or second year CS student.
              </SectionBody>
            </div>
            <div className="col-12 col-md-6">
              <Image src={qualifications} />
              <LightText><strong>Source:</strong> Google Careers, Software Engineering Intern Summer 2019</LightText>
            </div>
          </div>
        </Section>
        <Section>
          <h3 className="display-6">I Have No Experience, Can I Still Contribute?</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <SectionBody>
                You can find open source projects anywhere and everywhere, and most are looking
                for contributors, regardless of your level of experience.  <a href="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0" target="_blank">
                This article</a> on Medium makes a great argument for why a new developer should jump right into open source, even though making
                contributions to a "real" codebase can seem daunting.
              </SectionBody>
              <SectionBody>
                <strong>To sum up the article: </strong>It’s okay to start slowly and work
                your way up--every project can use help, even if it's just updating documentation at first.  You don’t want your first contribution to
                be some great contribution to some great codebase; you want your first contribution to be now.
              </SectionBody>
            </div>
            <SectionBody className="col-12 col-md-6">
            <LinkBox
              link="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0"
              title="Why You Should Contribute to Open Source Software Right Now"
              desc="For a budding software developer, contributing to open source seems exciting but daunting. I know this because..."
              site="Medium.com"
            />
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

export const LinkBox = ({ link, title, desc, site }) => (
  <ShadowBox>
    <a
      href={link}
      data-href={link}
      title={link}
      rel="nofollow"
      target="_blank"
      style={{color: 'gray', textDecoration: 'none'}}
    >
      <strong style={{color: '#282828'}}>{title}</strong><br/>
      <div style={{marginTop: '10px'}}>{desc}</div><br/>
      <em>{site}</em>
    </a>
  </ShadowBox>
);

export default Intro;
