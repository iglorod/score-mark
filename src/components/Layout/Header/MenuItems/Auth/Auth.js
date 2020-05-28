import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import ProfileIcon from '../../../../../assets/images/profile.png';
import { logoutActionCreator } from '../../../../../store/authorization/actions';
import '../MenuItems.css';

const Auth = (props) => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    console.log('close')
    if (e.key === '1') {
      setVisible(false);
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1'><UserOutlined /> My Profile</Menu.Item>
      <Menu.Item key='2' onClick={props.logout}><LogoutOutlined /> Logout</Menu.Item>
    </Menu>
  );

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  }

  let authLinks = (
    <Dropdown
      trigger='click'
      overlay={menu}
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <img src={ProfileIcon} className={'profile-button'} height={40} alt={'profile'} />
    </Dropdown>
  )
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
