import React from 'react';
import moment from 'moment';

class TimeSheetOptions extends React.Component
{
   nextDate()
    {
        let date = this.props.date.add(1, 'days');
        this.props.onDateChange(date);
    }
    
    previousDate()
    {
        let date = this.props.date.add(1, 'days');
        this.props.onDateChange(date);
    }
    
    render()
    {
        return(
            <div className="timesheets-options container-fluid">
                <ul className="list-inline">
                    <li>
                        <a className="btn btn-default btn-raised btn-lg" onClick={this.previousDate.bind(this)}><i className="glyphicon glyphicon-chevron-left"></i></a>
                        <input type="text" value={this.props.date.format(this.props.format)} />
                        <a className="btn btn-default btn-raised btn-lg" onClick={this.nextDate.bind(this)}><i className="glyphicon glyphicon-chevron-right"></i></a>
                    </li>
                    <li><button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-addtimesheet"><i className="glyphicon glyphicon-plus-sign"></i></button></li>
                    <li><button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-deletetimesheet"><i className="glyphicon glyphicon-trash"></i></button></li>
                </ul>
            </div>
        );
    }
}

export default TimeSheetOptions;