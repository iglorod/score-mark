import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

import { AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { searchPlayer as fetchPlayersByName } from '../../FakeData/FakeData';
import classes from './SearchPlayers.module.css';

const SearchPlayers = () => {
  const [searchWord, setSearchWord] = useState('');
  const [recivedPlayers, setRecivedPlayers] = useState([]);

  const debounceSearch = useRef(debounce((word) => {
    fetchPlayersByName(word)
      .then(response => response.api.results.players.slice(0, 5))
      .then(players => setRecivedPlayers(players))
      .catch(error => console.log(error))
  }, 800));

  useEffect(() => {
    if (searchWord.length < 3) return;
    debounceSearch.current(searchWord);
  }, [searchWord])

  const handleChange = (event) => {
    const word = event.target.value;
    setSearchWord(word);
  }

  const renderPlayerItem = (player) => ({
    value: player.player_name,
    label: (
      <Link
        to={{
          pathname: '/player',
          state: { id: player.player_id, }
        }}
        className={classes.playerItem}
      >
        <UserOutlined /> {player.player_name}
      </Link>
    ),
  });

  return (
    <AutoComplete
      value={searchWord}
      placeholder='Search players'
      className={classes.searhPlayers}
      onInput={handleChange}
      options={
        recivedPlayers.map((player) => (
          renderPlayerItem(player)
        ))
      }
    />
  )
}

export default SearchPlayers;
