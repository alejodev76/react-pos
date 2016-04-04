import React from 'react';
import {Link} from 'react-router';

class SecondaryNavigation extends React.Component
{
    
    render()
    {
        let createLink = function(navItem)
        {
            return (
                <li  key={navItem.url}>
                    <Link activeClassName="active" className="btn btn-default btn-raised" to={"/" + navItem.url}>{navItem.label}</Link>
                </li>
            );
        }
        return (
                    <div className="secondary-navigation-region">
                        <div id="secondary-navigation" className="secondary-navigation collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-left">
                                    {
                                        this.props.navItems.map(createLink, this)
                                    }
                            </ul>
                        </div>
                    </div>
        )
     }
}

SecondaryNavigation.propTypes =
{
   navItems:React.PropTypes.array.isRequired
}

SecondaryNavigation.contextTypes =
{
    router: function(){ React.PropTypes.func.isRequired}
};

export default SecondaryNavigation;