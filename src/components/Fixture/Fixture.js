import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Tactic from '../Tactic/Tactic';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../../store/mode/actions';

const Fixture = (props) => {
  const { fixture, openComments, closeComments } = props;

  useEffect(() => {
    if (!fixture) return;

    const fixtureId = fixture.fixture_id;
    openComments(`http://localhost:3000/fixture/${fixtureId}`, fixtureId.toString(), 'Fixture');

    return () => {
      closeComments();
    }
  }, [fixture, openComments, closeComments])

  return (
    <div>
      <Tactic />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fixture);
