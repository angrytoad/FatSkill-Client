import React from 'react';
import Helmet from 'react-helmet';
import DevTools from '../../_dev/DevTools';

const environment = process.env.NODE_ENV;

import './core.scss';
import './imports.scss';
import  '../reusable/resuable.scss';

import './App.scss'

import '../reusable/icons/android-chrome-192x192.png';
import '../reusable/icons/android-chrome-256x256.png';
import '../reusable/icons/apple-touch-icon.png';
import '../reusable/icons/favicon-16x16.png';
import '../reusable/icons/favicon-32x32.png';
import '../reusable/icons/mstile-150x150.png';
import '../reusable/icons/safari-pinned-tab.svg';
import '../reusable/icons/manifest.json';

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
    <div id="App">
      <Helmet
        titleTemplate="FatSkill | %s"
        link={[
          {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
          {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.css"}
        ]}
        script={[
          {"src": "https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.js"}
        ]}
      />
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