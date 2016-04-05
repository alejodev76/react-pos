
import React from 'react';

import HomePage from './login/components/HomePage.jsx';
import DashBoard from './dashboard/components/Dashboard.jsx';
import TimeKeeping from './timekeeping/components/TimeKeeping.jsx';
import Tickets from './dashboard/components/tickets/Tickets.jsx';
import Labor from './dashboard/components/labor/labor.jsx';
import Contest from './dashboard/components/contest/Contest.jsx';
import Dining from './dashboard/components/dining/dining.jsx';
import Events from './dashboard/components/events/Events.jsx';
import Lessons from './dashboard/components/lessons/Lessons.jsx';
import Messages from './dashboard/components/messages/Messages.jsx';
import Specials from './dashboard/components/specials/Specials.jsx';
import Teetimes from './dashboard/components/teetimes/Teetimes.jsx';
import Activities from './dashboard/components/activities/Activities.jsx';
import App from './App.jsx';

import {Route, IndexRoute} from 'react-router';

import TimeSheetActions from './timekeeping/actions/TimeSheetActions.jsx';

import moment from 'moment';

let onEnter = function()
{
    TimeSheetActions.initializeTimesheet();
}

const routes = (
    <Route path='/' component={App}>
         <IndexRoute component={HomePage} />
         <Route path='dashboard' components={DashBoard}>
            <Route path='tickets' components={{content:Tickets}}/>
            <Route path='labor' components={{content:Labor}}/>
            <Route path='specials' components={{content:Specials}}/>
            <Route path='contest' components={{content:Contest}}/>
            <Route path='messages' components={{content:Messages}}/>
            <Route path='activities' components={{content:Activities}}/>
            <Route path='teetimes' components={{content:Teetimes}}/>
            <Route path='lessons' components={{content:Lessons}}/>
            <Route path='dining' components={{content:Dining}}/>
            <Route path='events' components={{content:Events}}/>
         </Route>
        <Route path='timekeeping' component={TimeKeeping} onEnter={onEnter}/>
    </Route>
);

export default routes;
