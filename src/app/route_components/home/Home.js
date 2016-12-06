import React from 'react';

import './Home.scss';

import ExampleContainer from '../../../_examples/example_container';

const Home = (props) => {
  return (
    <div id="home">
      <h1>Application successfully running</h1>
      <ExampleContainer />
    </div>
  )
};

export default Home;