import React from 'react';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * When working on specific styling for a component you should aim to break it down into specific CSS files
 * as working on one great big CSS file for your whole project can get overwhelming fast.
 */
import './directory/of/component/Example.css';


const Example = () => {
  return (
    <div>
      <h1>This is just an example component</h1>
    </div>
  )
};

export default Example;