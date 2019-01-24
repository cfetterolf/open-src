import React, { Component } from 'react';
import {
  Section,
  SectionBody,
  Image,
  LinkBox
} from './Intro';
import { Link } from './GettingStarted';

class Django extends Component {
  state = {};

  render() {
    return (
      <div>
        <Section>
          <h3 className="display-6">Sources Cited</h3>
          <div className="row">
            <div className="col-12">
              <SectionBody>
                <h4 className="display-8">Why Open Source?</h4>
                <ul>
                  <li><Link href="https://opensource.com/resources/what-open-source">https://opensource.com/resources/what-open-source</Link></li>
                  <li><Link href="https://careers.google.com/">https://careers.google.com/</Link></li>
                  <li><Link href="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0">https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0</Link></li>
                </ul>

                <h4 className="display-8">Getting Started</h4>
                <ul>
                  <li><Link href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github">https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github</Link></li>
                  <li><Link href="https://openhatch.org/">https://openhatch.org/</Link></li>
                  <li><Link href="https://mozilla.org/">https://mozilla.org/</Link></li>
                  <li><Link href="https://codetribute.mozilla.org/">https://codetribute.mozilla.org/</Link></li>
                  <li><Link href="https://www.whatcanidoformozilla.org/">https://www.whatcanidoformozilla.org/</Link></li>
                  <li><Link href="https://openstack.org/">https://openstack.org/</Link></li>
                  <li><Link href="https://bugs.launchpad.net/openstack/">https://bugs.launchpad.net/openstack/</Link></li>
                  <li><Link href="https://phabricator.wikimedia.org/">https://phabricator.wikimedia.org/</Link></li>
                  <li><Link href="https://www.mediawiki.org/wiki/">https://www.mediawiki.org/wiki/</Link></li>
                  <li><Link href="https://docs.djangoproject.com/en/dev/internals/contributing/">https://docs.djangoproject.com/en/dev/internals/contributing/</Link></li>
                  <li><Link href="https://docs.djangoproject.com/en/dev/internals/contributing/new-contributors/">https://docs.djangoproject.com/en/dev/internals/contributing/new-contributors/</Link></li>
                </ul>

                <h4 className="display-8">Example: Atom</h4>
                <ul>
                  <li><Link href="https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855">https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855</Link></li>
                  <li><Link href="https://git-scm.com/">https://git-scm.com/</Link></li>
                  <li><Link href="https://github.com/atom/atom/blob/master/CONTRIBUTING.md">https://github.com/atom/atom/blob/master/CONTRIBUTING.md</Link></li>
                </ul>
              </SectionBody>
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default Django;
