import React from 'react';

import { Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

import './Title.css';

const Title = (props) => {
  const { player } = props;

  const seasons = (
    <Menu>
      {
        props.availibleSeasons.map((season, index) => (
          <Menu.Item
            key={index}
            onClick={props.setSelectedSeason.bind(this, season)}
          >
            {season}
          </Menu.Item>
        ))
      }
    </Menu>
  )

  return (
    <div className={'title'}>
      <div className={'season'}>
        <div className={'profile-icon'}><UserOutlined /></div>
        <div>
          {
            <Dropdown overlay={seasons} trigger={'click'}>
              <div>
                {'Season: '}
                <span>
                  {props.selectedSeason} <DownOutlined />
                </span>
              </div>
            </Dropdown>
          }
        </div>
      </div>

      <div className={'player-data'}>
        <div><span>Name: </span> {player.firstname} {player.lastname}</div>
        <div><span>Team: </span> {player.team_name}</div>
        <div><span>League: </span> {player.league}</div>
        <div><span>Position: </span> {player.position} {player.last_name}</div>
      </div>
      <div className={'player-data'}>
        <div><span>Age: </span> {player.age} years old</div>
        <div><span>Height: </span> {player.height}</div>
        <div><span>Weight: </span> {player.weight}</div>
        <div><span>Nationality: </span> {player.nationality}</div>
      </div>
    </div>
  )
}

export default Title;
