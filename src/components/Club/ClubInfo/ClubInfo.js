import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { throttle } from 'lodash';

import { EnvironmentFilled } from '@ant-design/icons';

import StadiumIcon from '../../../assets/images/stadium.png';
import { fetchClubActionCreator } from '../../../store/club/actions';
import ModalSpinner from '../../UI/ModalSpinner/ModalSpinner';
import BriefStats from './BriefStats/BriefStats';
import classes from './ClubInfo.module.css';

const ClubInfo = (props) => {
  const { club, fetchClub } = props;
  const logoEl = useRef(null);

  const [logoIsFixed, setLogoIsFixed] = useState(false);

  useEffect(() => {
    //get club id from props.history

    fetchClub();
  }, [fetchClub])

  useEffect(() => {
    checkWidth.current();
    window.addEventListener('scroll', checkWidth.current);

    return () => {
      checkWidth.current.cancel();
      window.removeEventListener('scroll', checkWidth.current);
    }
  }, [])

  const checkWidth = useRef(throttle(() => {
    if (!logoEl.current) return;
    const elOffset = logoEl.current.getBoundingClientRect();

    if (elOffset.top < 70) {
      setLogoIsFixed(true);
    }
    else if (elOffset.top > 70) {
      setLogoIsFixed(false);
    }
  }, 300));

  if (!club) return <ModalSpinner />;

  return (
    <div className={classes.clubInfo} ref={logoEl}>
      <div
        className={classes.logoContainer}
        style={{ position: logoIsFixed ? 'sticky' : 'initial', top: logoIsFixed ? '50px' : 0 }}
      >
        <img src={club.logo} className={classes.logo} alt={'club'} />
      </div>

      <div className={classes.teamName}>{club.name}</div>

      <div className={classes.stadium}>
        <div>
          <img src={StadiumIcon} className={classes.stadiumIcon} alt={'stadium'} />
        </div>
        <div>{club.venue_name}</div>
      </div>

      <div className={classes.address}>
        <EnvironmentFilled />
        {club.venue_city}, {club.venue_address}
      </div>

      <BriefStats />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    club: state.club.club,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClub: (id) => { dispatch(fetchClubActionCreator(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClubInfo));
