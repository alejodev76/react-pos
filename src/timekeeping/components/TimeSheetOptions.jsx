import React from 'react';
import moment from 'moment';

class TimeSheetOptions extends React.Component
{
   nextDate()
    {
        this._changeDate(1, "days", "add");
    }
    
    previousDate()
    {
       this._changeDate(1, "days", "subtract");
    }
    
    _changeDate(value, unit, fx)
    {
        this.props.date[fx](value, unit);
        this.props.onDateChange();
    }
    
    onAddDetail()
    {
        this.props.onEditActionTrigger("Add");   
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
                    <li>
                        <button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-detaileditor" onClick={this.onAddDetail.bind(this)}>
                                <i className="glyphicon glyphicon-plus-sign" ></i>
                          </button>
                    </li>
                    <li><button className="btn btn-default btn-raised btn-lg" type="button" data-toggle="modal" data-target="#modal-deletetimesheet"><i className="glyphicon glyphicon-trash"></i></button></li>
                </ul>
            </div>
        );
    }
}

export default TimeSheetOptions;