import React from 'react';

import './Home.scss';

import './logo.png';

import ExampleContainer from '../../../_examples/example_container';

const Home = (props) => {
  return (
    <div id="home">
      <h1>Application successfully running</h1>
      <div id="logo-wrap">
        <h1>Next generation applications brought to you by</h1>
        <img src='/assets/logo.png' id="logo" />
      </div>

      <ExampleContainer />
    </div>
  )
};

export default Home;