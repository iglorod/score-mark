import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PlayerClub from './PlayerClub/PlayerClub';
import PlayerPartners from './PlayerPartners/PlayerPartners';
import { fetchPlayerClubActionCreator, fetchPlayerPartnersActionCreator } from '../../../store/player/actions';
import classes from './ClubSquad.module.css';

const ClubSquad = (props) => {
  const { fetchPlayerClub, fetchPlayerPartners } = props;

  useEffect(() => {
    if (props.stats.length > 0) {
      const teamId = props.stats[0].team_id;
      fetchPlayerClub(teamId);
      fetchPlayerPartners(teamId);
    }
  }, [props.stats, fetchPlayerClub, fetchPlayerPartners])

  if (props.stats.length === 0) return null;

  return (
    <div className={classes.clubSquad}>
      <PlayerClub />
      <PlayerPartners currentId={props.stats[0].player_id} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.plr.stats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerClub: (teamId) => { dispatch(fetchPlayerClubActionCreator(teamId)) },
    fetchPlayerPartners: (teamId) => { dispatch(fetchPlayerPartnersActionCreator(teamId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubSquad);
