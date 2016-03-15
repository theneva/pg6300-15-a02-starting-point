import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

const api = 'http://localhost:7832';

// Get the albums & render when we have them
fetch(api + '/albums')
    .then(res => res.json())
    .then(albums => {
      render((
          <App albums={albums}/>
      ), document.getElementById('container'));
    });
