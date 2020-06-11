import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card, Row, Col } from 'antd';

import classes from './News.module.css';

const News = () => {
  const { Meta } = Card;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://ip-api.com/json')
      .then(response => response.data)
      .then(address => address.countryCode)
      .then(countryCode => axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`))
      .then(response => response.data.articles)
      .then(articles => setArticles(articles))
      .catch(error => console.log(error))
  }, [])

  const CardFooter = ({ author, date }) => (
    <div className={classes.cardFooter}>
      <div className={classes.articlePublished}>{new Date(date).toLocaleString()}</div>
      <div className={classes.articleAuthor}>{author}</div>
    </div>
  )

  return (
    <div className={classes.newsList}>
      <Row gutter={[16, 16]}>
        {
          articles.map((article, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <a target='_blank' rel='noopener noreferrer' href={article.url}>
                <Card
                  hoverable
                  cover={<img src={article.urlToImage} alt='news' />}
                >
                  <Meta
                    title={article.title}
                    description={<CardFooter author={article.author} date={article.publishedAt} />} />
                </Card>
              </a>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default News;
