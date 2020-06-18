import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, CaretDownOutlined } from '@ant-design/icons';

import Profile from '../../../../Profile/Profile';
import MenuItem from '../ItemCascade/ItemCascade';
import { createSrc } from '../../../../../utility/utility';
import { logoutActionCreator } from '../../../../../store/authorization/actions';
import '../MenuItems.css';

const Auth = (props) => {
  const [visible, setVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '1') {
      setVisible(false);
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1' onClick={setProfileVisible.bind(this, true)}><UserOutlined /> My Profile</Menu.Item>
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
      <div className={'profile-button'}>
        <Avatar size={36} src={createSrc(props.image, 'profile-images')} />
        <span className={'profile-name'}>{props.displayName} <CaretDownOutlined /></span>
      </div>
    </Dropdown>
  )
  if (!props.email) {
    authLinks = (
      <>
        <NavLink className={'action-button'} to='/sign-in'>
          <MenuItem icon={<LoginOutlined />} text={'Sign In'} />
        </NavLink>
        <NavLink className={'action-button'} to='/sign-up'>
          <MenuItem icon={<UserAddOutlined />} text={'Sign Up'} />
        </NavLink>
      </>
    )
  }

  return (
    <React.Fragment>
      {authLinks}
      <Profile
        open={profileVisible}
        closeModal={setProfileVisible.bind(this, false)} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    image: state.auth.profilePicture,
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
