import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import { Layout } from 'antd';
import './Layout.css';

import Header from './Header/Header';
import Content from './Content/Content';
import { signInLocallyActionCreator } from '../../store/authorization/actions';
import { setMobileModeActionCreator } from '../../store/mode/actions';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const LayoutComponent = (props) => {
  const { signInLocally, loading } = props;

  useEffect(() => {
    signInLocally();
  }, [signInLocally])
  
  useEffect(() => {
    checkWidth.current();
    window.addEventListener('resize', checkWidth.current);

    return () => {
      checkWidth.current.cancel();
      window.removeEventListener('scroll', checkWidth.current);
    }
  }, [])

  const checkWidth = useRef(throttle(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      props.setMode(true, windowWidth);
    } else {
      props.setMode(false, windowWidth);
    }
  }, 1500));

  let content = (
    <Layout>
      <Layout>
        <Content />
      </Layout>
    </Layout>
  )
  if (loading) content = <ModalSpinner />

  return (
    <Layout className='main-layout'>
      <Header />
      {content}
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInLocally: () => { dispatch(signInLocallyActionCreator()) },
    setMode: (mobile, windowWidth) => { dispatch(setMobileModeActionCreator(mobile, windowWidth)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
