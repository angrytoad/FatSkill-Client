import React from 'react';
import Helmet from 'react-helmet';

import './Home.scss';
import Header from '../../reusable/Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeMainContent from './HomeMainContent/HomeMainContent';

const Home = (props) => {
  return (
    <div id="home">
      <Helmet
        title="Modernise Recruitment"
      />
      <Header />
      <HomeBanner />
      <HomeMainContent />
    </div>
  )
};

export default Home;