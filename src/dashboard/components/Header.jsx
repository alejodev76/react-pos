
import React from 'react';

class Header extends React.Component
{
    render()
    {
        return (
            <header id="header" className="header navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle navbar-toggle-main collapsed" data-toggle="collapse" data-target="#main-navigation" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Clubsoft Test Server 5.8</a>
                        <button type="button" className="navbar-toggle navbar-toggle-secondary collapsed" data-toggle="collapse" data-target="#secondary-navigation" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-dot"></span>
                            <span className="icon-dot"></span>
                            <span className="icon-dot"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;