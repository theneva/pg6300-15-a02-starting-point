import React from 'react';
import { render } from 'react-dom';

import CarCustomer from './containers/CarCustomer.jsx';

render((
  <div className="container">
    <CarCustomer/>
  </div>
), document.getElementById('container'));
