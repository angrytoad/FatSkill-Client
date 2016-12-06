import React from 'react';
import DevTools from '../../_dev/DevTools';

const environment = process.env.NODE_ENV;

import './core.scss';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * This does not need changing, the idea is that all routes get rendered inside this dumb component and its for
 * them to handle changes and updates. If we are inside of a development environment then we will
 * want to ensure we enable redux devtools to manage and view changes to the state in our
 * application.
 */
const App = (props) => {
  return (
    <div>
      {props.children}
      {environment === 'development'
        ?
        <DevTools />
        :
        false
      }
    </div>
  )
};

export default App;