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
import openStack from '../img/openstack.png';
import wikipedia from '../img/wiki.png';

const ProjectDivide = styled.div`
  height: ${props => props.height ? props.height : '50px'};
`;

export const Link = ({ href, children }) => <a href={href} target="_blank">{children}</a>;

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

          <Project title="OpenStack" imgSrc={openStack} width="70%">
            <SectionBody>
              <a href="https://openstack.org/" target="_blank">OpenStack</a> is also a great project to start out with. The OpenStack project is divided into
              various components: Swift, Glance, Nova, Horizon, Keystone etc. Each of these components have their own page. If you head over to
              the <a href="https://wiki.openstack.org/wiki/Main_Page" target="_blank">OpenStack Wiki Main page</a>, you can see the components listed seperately.
            </SectionBody>
            <SectionBody>
              Each component's page contains the link to repository, a bug tracker (<a href="https://bugs.launchpad.net/openstack/" target="_blank">Launchpad</a>),
              and documentation. OpenStack calls their beginner bugs as "Low Hanging Fruits",
              <a href="https://bugs.launchpad.net/openstack/+bugs?field.tag=low-hanging-fruit" target="_blank"> click here</a> to see them!.
            </SectionBody>
          </Project>

          <ProjectDivide/>

          <Project title="Wikipedia" imgSrc={wikipedia} width="50%" offset>
            <SectionBody>
              Most of the people on the planet have heard of the name Wikipedia but how many have ever thought of contributing to it? Wikipedia is supported by
              Wikimedia Foundation. Mediawiki tags their easy bugs with the 'easy' tag. <a href="https://phabricator.wikimedia.org/maniphest/?bug_severity=normal&bug_severity=minor&bug_severity=trivial&bug_severity=enhancement&bug_status=NEW&bug_status=REOPENED&columnlist=product%2Ccomponent%2Cchangeddate%2Cbug_severity%2Cpriority%2Cshort_desc&keywords=easy&keywords_type=allwords&order=changeddate%20DESC%2Cproduct%2Ccomponent">Click here</a> to
              search for those introductory bugs.
            </SectionBody>
            <SectionBody style={{paddingBottom: 0}}>
              Some other interesting links:
            </SectionBody>
            <ul className="">
              <li className=""><Link href="https://www.mediawiki.org/wiki/Gerrit/Tutorial/tl;dr">Getting started</Link></li>
              <li className=""><Link href="https://www.mediawiki.org/wiki/How_to_become_a_MediaWiki_hacker">How to become a Mediawiki Hacker</Link></li>
              <li className=""><Link href="https://www.mediawiki.org/wiki/MediaWiki-Vagrant">Installing Mediawiki on local system</Link></li>
              <li className=""><Link href="https://www.mediawiki.org/wiki/Good_first_bugs">Good first bugs</Link></li>
            </ul>
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
