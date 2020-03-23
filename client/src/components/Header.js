import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper light-blue darken-4">
              <a className="brand-logo">Campaign Tracker</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a>Login with Google</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}


export default Header;