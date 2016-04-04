import React from 'react';
import Tickets from './tickets/Tickets.jsx';
import SecondaryNavigation from './navigation/SecondaryNavigation.jsx';
import {Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import NavigationApi from '../api/NavigationApi.jsx';
import routes from './Routes.jsx';

class RightPanel extends React.Component
{
    render()
    {
        return (
            <div>
                <SecondaryNavigation navItems={this.props.navItems}/>
                <div className="content-region">
                    <span className="spinner spinner-medium"></span>
                    <Router routes={routes}/>
               </div>
            </div>
        );
    }
}

SecondaryNavigation.propTypes =
{
   navItems:React.PropTypes.array.isRequired
}

export default RightPanel;