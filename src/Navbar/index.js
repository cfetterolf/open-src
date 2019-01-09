import React, { Component } from 'react';

class Nav extends Component {
  state = {};

  render() {
    const { page, selectPage } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Open Source at Midd</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${page === 'intro' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => selectPage('intro')}>Why Open Source?</a>
              </li>
              <li className={`nav-item ${page === 'start' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => selectPage('start')}>Getting Started</a>
              </li>
              <li className={`nav-item dropdown ${page === 'django' ? 'active' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Examples
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#" onClick={() => selectPage('django')}>Django</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
