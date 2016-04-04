import React from 'react';
import {Link} from 'react-router';


class PrimaryNavigation extends React.Component
{
    render()
    {
        return (
                    <div className="main-navigation-region">
                        <div id="main-navigation" className="main-navigation collapse navbar-collapse">
                            <ul className="nav navbar-nav main-navigation-top">
                                <li className="new-transaction"><a title="New Transaction" className="btn btn-success btn-raised" href="/"><i className="glyphicon glyphicon-plus"></i> New Transaction</a></li>
                                <li className="timekeeping"><Link title="Time Keeping" className="btn btn-default btn-raised" to="/timekeeping"><i className="glyphicon glyphicon-time"></i>Time Keeping</Link></li>
                                <li className="clockout"><a title="Clock Out" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-upload"></i>Clock Out</a></li>
                                <li className="recipe"><a title="Recipe" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-link"></i> Recipe </a></li>
                                <li className="options"><a title="Options" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-cog"></i> Options </a></li>
                                <li className="open-drawer"><a title="Open Drawer" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-plus"></i> Open Drawer</a></li>
                                <li className="quick-ticket"><a title="Quick Ticket" className="btn btn-default btn-raised" href="/#ticketeditor"><i className="glyphicon glyphicon-alert"></i> Quick Ticket</a></li>
                            </ul>
                            <ul className="nav navbar-nav main-navigation-bottom">
                                <li></li>
                                <li className="giftcard-balance"><a title="Gift Card Balance" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-gift"></i> Gift&nbsp;Card Balance</a></li>
                                <li className="system-tools"><a title="System Tools" className="btn btn-default btn-raised" href="/"><i className="glyphicon glyphicon-glass"></i> System Tools</a></li>
                                <li className="signout"><a title="Sign Out" className="btn btn-success btn-raised" href="/accounts/signout"><i className="glyphicon glyphicon-export"></i> Sign Out</a></li>
                                <li></li>
                                <li className="exit"><a title="Exit" className="btn btn-danger btn-raised" href="/accounts/signout"><i className="glyphicon glyphicon-log-out"></i> Exit</a></li>
                            </ul>
                        </div>
                    </div>
        )
     }
}

export default PrimaryNavigation;