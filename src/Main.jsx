import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

import React from 'react';

import ReactDOM from 'react-dom';
import {Router} from 'react-router';


import DashBoard from './dashboard/components/DashBoard';

ReactDOM.render(<DashBoard/>, document.getElementById('app'));

/*
import HomePage from './login/components/HomePage';

ReactDOM.render(<HomePage/>, document.getElementById('app'));
*/
/*
import InitializeActions from './actions/initializeActions.jsx';

InitializeActions.initApp();

ReactDOM.render(<Router>{routes}</Router>, document.getElementById("app"))

*/


