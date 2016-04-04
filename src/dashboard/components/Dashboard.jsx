import React from 'react';
import Header from './Header.jsx';

import NavigationApi from '../api/NavigationApi.jsx';
import PrimaryNavigation from './navigation/PrimaryNavigation.jsx';
import RightPanel from './RightPanel.jsx';



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
    
     componentDidMount()
     {
         let callback = function()
         {
             console.log("nav item list retreived")
             
         
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
                <RightPanel navItems={this.state.navItems}/>
           </div>
       )
    }
}

export default DashBoard;