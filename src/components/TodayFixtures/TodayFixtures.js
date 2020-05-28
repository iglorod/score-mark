import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { todayFixtures } from '../../FakeData/FakeData';

import Fixture from './Fixture/Fixture';
import './TodayFixtures.css';

const TodayFixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    todayFixtures()
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))
  }, [])

  if (fixtures.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {
          fixtures.map((fixture, index) => (
            <Fixture key={index} fixture={fixture} />
          ))
        }
      </Slider>
    </div>
  )
}

export default TodayFixtures;
