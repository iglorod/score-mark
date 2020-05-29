import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { throttle } from 'lodash';

import { todayFixtures } from '../../FakeData/FakeData';

import Fixture from './Fixture/Fixture';
import './TodayFixtures.css';

const TodayFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [showDots, setShowDots] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    todayFixtures()
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))
  }, [])

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
    const slidesCount = Math.trunc((windowWidth - 100) / 300);

    if (slidesToShow !== slidesCount) {
      setSlidesToShow(slidesCount || 1);
    }

    if (windowWidth < 665) {
      setShowDots(false);
    } else {
      setShowDots(true);
    }
  }, 1500));

  if (fixtures.length === 0) return null;

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
