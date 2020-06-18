import React from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import MenuItems from './MenuItems/MenuItems';
import TodayFixtures from '../../TodayFixtures/TodayFixtures';
import SearchPlayers from '../../SearchPlayers/SearchPlayers';
import Logo from './Logo/Logo';

import './Header.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Header } = Layout;

const HeaderComponent = ({ loading }) => {
  return (
    <>
      <div className={'today-fixtures'}>
        <TodayFixtures />
      </div>
     
      <Header className='header'>
        <Logo />
      
        <div className={'search-bar'}>
          <SearchPlayers />
        </div>

        <MenuItems />
      </Header>
     
      <div className={'bottomLine'}>
        <div className={loading ? 'loading' : 'stable'}></div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.submitting || state.club.loading || state.fxt.loading || state.plr.loading,
  }
}

export default connect(mapStateToProps)(HeaderComponent);
