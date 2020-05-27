import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutActionCreator } from '../../../../../store/authorization/actions';
import '../MenuItems.css';

const Auth = (props) => {
  let authLinks = <div className={'action-button'} onClick={props.logout}>Logout ({props.displayName})</div>
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
    displayName: state.auth.displayName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch(logoutActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
