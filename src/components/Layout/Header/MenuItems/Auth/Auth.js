import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import '../MenuItems.css';

const Auth = (props) => {
  let authLinks = <div className={'action-button'}>Logout</div>
  if (!props.email) {
    authLinks = (
      <>
        <NavLink className={'action-button'} to='/sign-in'>Sign In</NavLink>
        <NavLink className={'action-button'} to='/sign-up'>Sign Up</NavLink>
      </>
    )
  }

  return authLinks;
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  }
}

export default connect(mapStateToProps)(Auth);
