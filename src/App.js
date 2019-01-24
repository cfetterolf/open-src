import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  state = {
    page: 'atom',
  };

  selectPage = page => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        <Navbar
          page={page}
          selectPage={page => this.selectPage(page)}
        />
        <Main
          page={page}
          selectPage={page => this.selectPage(page)}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
