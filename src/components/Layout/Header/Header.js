import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Logo from '../../../assets/images/logo.png';
import Leagues from './MenuItems/Leagues/Leagues';
import Fixtures from './MenuItems/Fixtures/Fixtures';
import Auth from './MenuItems/Auth/Auth';

const { Header } = Layout;

const HeaderComponent = () => {
  const [openCascaderId, setOpenCascaderId] = useState(-1);

  const openCascader = (id) => {
    setOpenCascaderId(id);
  }

  const closeCascader = () => {
    setOpenCascaderId(-1);
  }

  return (
    <Header className='header'>
      <div className='logo'>
        <img src={Logo} alt={'logo'} />
      </div>

      <div className={'nav-actions'}>
        <Leagues
          cascaderIsOpen={openCascaderId === 0}
          openCascader={openCascader.bind(this, 0)}
          closeCascader={closeCascader} />
        <Fixtures
          cascaderIsOpen={openCascaderId === 1}
          openCascader={openCascader.bind(this, 1)}
          closeCascader={closeCascader} />
      </div>
      <div className={'auth-actions'}>
        <Auth />
      </div>
    </Header>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  }
}

export default connect(mapStateToProps)(HeaderComponent);
