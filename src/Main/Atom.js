import React, { Component } from 'react';
import styled from '@emotion/styled';
import {
  Section,
  SectionBody,
  Image,
} from './Intro';
import { Link } from './GettingStarted';
import atomImg from '../img/atom.png';

const Block = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 10px 10px 1px 20px;
  padding-top: 15px;
  box-shadow: 0 0 2px 1px rgba(0,0,0, 0.07);
  color: grey;
  margin-bottom: 10px;
`;

const Prompt = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const Note = styled.p`
  padding: 20px;
`;

const Code = ({ children }) => (
  <pre><code style={{color: '#505050'}}><Prompt>$</Prompt>{children}</code></pre>
);

class Atom extends Component {
  state = {};

  render() {
    return (
      <div>
      <Section>
        <h3 className="display-6">Customizing the Atom Text Editor</h3>
        <div className="row">
          <div className="col-md-7 col-12">
            <SectionBody>
              Note: this tutorial requires a basic level of familiarity with the terminal.  If that sounds scary and/or intimidating, head over to
              <Link href="https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855"> this tutorial</Link> before diving in here.
            </SectionBody>
            <h4 className="display-8">Setting up the Development Environment</h4>
            <SectionBody>
              For this tutorial, we are going to be making a small change to the Atom
              text editor.  Atom calls itself a "hackable text editor for the 21st century", which
              also means that it is open source!  Before we jump into the code, the first thing we need to do is set up our development environment.
              Because Atom's codebase is shared among all of it's contributors, it uses <Link href="https://git-scm.com/">Git </Link>
              to help track changes to the code and manage version control.
              To check whether or not you have Git installed on your system, enter git into the command line. If you get messages saying that
              this command could not be found, you’ll have to download and install it, see <Link href="https://git-scm.com/download">Git’s download page</Link>
            </SectionBody>
          </div>
          <div className="col-md-5 col-12">
            <Image src={atomImg} width={300} />
          </div>
        </div>

        <SectionBody>
          The first step to contributing to Atom is to get a copy of the source code.  To do this, navigate to wherever you want the repo to live using <strong>cd</strong>,
          then run the below command to clone the repository locally on your computer.
        </SectionBody>
        <Block>
          <Code>git clone git@github.com:atom/tree-view.git</Code>
        </Block>

        <SectionBody>
          Now, we install the dependencies for the project.  We can do this by entering the following command.  Note that if any errors, it is most likely a problem with your
          system (old versions of Python, Node, etc...when I did this on a Mac, I had a faulty version of Xcode command line tools).  Whatever the issue, a quick google search wherever it
          says '<strong>error:</strong>' will most likely do the trick.
        </SectionBody>
        <Block>
          <Code>cd tree-view</Code>
          <Code>apm install</Code>
        </Block>

        <SectionBody>
          From here, you can link Atom to 'development' mode.  This means that when you run an Atom window
          with <strong>atom --dev</strong>, you will use your fork instead of the built in package:
        </SectionBody>
        <Block>
          <Code>apm link -d</Code>
        </Block>

        <SectionBody>
          Editing a package in Atom is a bit of a circular experience: you're using Atom to modify itself.
          What happens if you temporarily break something? You don't want the version of Atom you're using to
          edit to become useless in the process. For this reason, you'll only want to load packages in development
          mode while you are working on them. You'll perform your editing in stable mode, only switching to development mode to test your changes.
        </SectionBody>
        <SectionBody>
          To load the <strong>tree-view</strong> package in development mode, create a symlink to it in <strong>~/.atom/dev/packages</strong>.  To do this,
          run the following commands, which creates the symlink and then opens Atom in development mode:
        </SectionBody>
        <Block>
          <Code>apm link --dev</Code>
          <Code>atom --dev path/to/project</Code>
        </Block>
        <SectionBody>
          To unlink your package, run <strong>apm unlink --dev</strong> at the top level of the <strong>tree-view</strong> repository.  For now, close the development instance of Atom that just opened--we
          will use that to see our changes to the <strong>tree-view</strong> package in the next section.
        </SectionBody>
      </Section>
      <Section>
        <h4 className="display-8">Customizing the Package</h4>
        <SectionBody>
          Now that you have a development environment set up, the changes you make to the <strong>tree-view</strong> repository will be reflected in the development instance of Atom you opened using the
          <strong>--dev</strong> flag.  For this section of the tutorial, let's add our own custom keymapping to <strong>tree-view</strong>.
        </SectionBody>
        <SectionBody>
          There are already many different key mappings built into the package.  Try toggling the tree-view on and off with <strong>CMD-\</strong>, or try moving up and down files in the tree-view with <strong>j</strong> and <strong>k</strong>,
          respectively.  While hovering over a folder, you can also press <strong>h</strong> to close the folder.  Let's dive into the code to find this last keymap.  If you haven't already, open the <strong>tree-view</strong> repository:
        </SectionBody>
        <Block>
          <Code>cd your/path/to/tree-view</Code>
          <Code>atom .</Code>
        </Block>
        <SectionBody>
          This last line just opens Atom at a given directory; in this case, the current directory.  Now our task is to find where the key mappings live.  First, make sure the tree-view on the left-hand-side is
          visable by toggling it with <strong>CMD-\</strong>.  Then, in the top level of <strong>tree-view</strong> there are five main
          folders: <strong>keymaps/</strong>, <strong>lib/</strong>, <strong>menus/</strong>, <strong>spec/</strong>, and <strong>styles/</strong>.  Open up the <strong>keymaps/tree-view.cson</strong> file, and boom!  We
          found where all the key mappings live.
        </SectionBody>

        <SectionBody>
          Note that each key mapping has two parts:  a command it listens for (<strong>'right'</strong>) and an action to execute when that key combo is pressed (<strong>'tree-view:expand-item'</strong>).  On <strong>Line 69</strong>,
          we can find the command to close a focues directory with <strong>h</strong>: <strong>tree-view:collapse-directory</strong>.  Now how can we find where this action is executed in the code?
          One useful trick in Atom (and most text editors) to find where something is referenced elsewhere is to do a <strong>global search</strong>.  In Atom, this is done using <strong>CMD-SHIFT-F</strong>.  Perform a global search on the term
          <strong> tree-view:collapse-directory</strong> and Atom will tell you it was found 10 times in 3 files.  Click on the middle result, and atom will open
          <strong> line 219</strong> in <strong>lib/tree-view.coffee</strong>, where we can see the action calls the function <strong>@collapseDirectory()</strong>.
        </SectionBody>

        <SectionBody>
          In the file <strong>lib/tree-view.coffee</strong>, you can see there are multiple actions beyond simply <strong>tree-view:collapse-directory</strong>.  On line 221, we can see the action <strong>tree-view:collapse-all</strong>.  This
          looks like it could use a keyboard shortcut, so let's make one.  Navigate back to <strong>keymaps/tree-view.cson</strong>, and add this just below line 69:
        </SectionBody>
        <Block>
          <pre><code style={{color: '#505050'}}>
            'x': 'tree-view:collapse-all'
          </code></pre>
        </Block>

        <SectionBody>
          Now, when we open Atom in development mode and press <strong>x</strong> while in the tree-view, it should collapse all the directories.  Let's try it out:
        </SectionBody>
        <Block>
          <Code>atom --dev .</Code>
        </Block>
        <SectionBody>
          With Atom opened in dev mode your local changes to the tree-view should be reflected in the editor.  Click on a folder in the tree-view and
          press <strong>x</strong>; if you followed the instructions, all of the folders should close.  Congrats, you just hacked Atom!
        </SectionBody>
        <SectionBody>
          If you want to actively contribute to the Atom community, the next steps would be to make sure your change doesn't break anything else in the code, and then ask other
          developers if you changes are good to merge into the master code base.  This process is called a <strong>pull request</strong>, or a PR for short.  Atom has some handy guides on
          how tocontribute head over <Link href="https://github.com/atom/atom/blob/master/CONTRIBUTING.md">here</Link> to check it out!
        </SectionBody>
      </Section>
      </div>
    )
  }
}

export default Atom;
