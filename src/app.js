import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Layout from './components/layout';

const app = document.querySelector('.app');

ReactDOM.render(
  <BrowserRouter>
    <Route path='/:id' component={Layout}/>
  </BrowserRouter>
, app);
