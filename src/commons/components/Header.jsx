import React from 'react';

class Header extends React.Component
{
    render()
    {
        return (
             <header id="header" className="header navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <span className="navbar-brand">{this.props.title}</span>
                </div>
            </header>
        )
    }
}

export default Header;