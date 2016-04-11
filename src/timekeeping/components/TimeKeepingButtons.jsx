import React from 'react';
import {Link} from 'react-router';

class TimeKeepingButtons extends React.Component
{
    onEditDetail()
    {
        this.props.onEditActionTrigger("Edit");   
    }
    
    render()
    {
        let newDetail = (this.props.timesheetDetail.ID == 0)
        return(
                    <div className="timesheetdetails-options container-fluid">
                        <ul className="list-inline">
                            <li><button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-detaileditor" disabled={newDetail} onClick={this.onEditDetail.bind(this)}>Edit Details</button></li>
                            <li><button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-deletetimesheetdetail"  disabled={newDetail}>Delete Details</button></li>
                            <li><button className="btn btn-default btn-raised btn-lg" type="button"  disabled={newDetail}>History</button></li>
                        </ul>
                        <ul className="list-inline exit-option">
                            <li><Link to="dashboard" className="btn btn-danger btn-raised btn-lg">Exit <i className="glyphicon glyphicon-log-out"></i></Link></li>
                        </ul>
                    </div>
        );
   }
}

export default TimeKeepingButtons;