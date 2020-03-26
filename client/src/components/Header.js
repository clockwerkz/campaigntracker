import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
      const LoginLink = this.props.isLoggedIn ? (<li><a>Welcome Back!</a></li>):(<li><a>Login with Google</a></li>);
      return (
            <nav>
            <div className="nav-wrapper light-blue darken-4">
              <div className="container">
                <a className="brand-logo">Campaign Tracker</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {LoginLink}
                </ul>
              </div>
            </div>
          </nav>
      )
    }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Header);