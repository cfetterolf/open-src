import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  state = {
    page: 'start',
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
      </div>
    );
  }
}

export default App;
