import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

import React from 'react';

import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './Routes.jsx';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById("app"))




