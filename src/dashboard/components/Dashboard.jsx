import React from 'react';
import Header from './Header.jsx';

import NavigationApi from '../api/NavigationApi.jsx';
import PrimaryNavigation from './navigation/PrimaryNavigation.jsx';
import SecondaryNavigation from './navigation/SecondaryNavigation.jsx';

import Tickets from './tickets/Tickets.jsx';

class DashBoard extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            navItems:[]
        }
        
    }
    
     componentWillMount()
     {
         let callback = function()
         {
             this.setState({navItems:NavigationApi.getNavItems()})
             
         }.bind(this);
         
         NavigationApi.loadNavData(callback);
    }
    
    render()
    {
       return (
           <div>
                <Header/>
                <PrimaryNavigation/>
                <SecondaryNavigation navItems={this.state.navItems}/>
                <div className="content-region">
                   {this.props.content || <Tickets/>}
               </div>
           </div>
       )
    }
}

export default DashBoard;

