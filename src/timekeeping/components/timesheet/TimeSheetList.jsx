import React from 'react';

class TimeSheets extends React.Component
{
    
    render()
    {
        let buildEmployeeRow = function(timesheet)
        {
            return(
                        <tr key={timesheet.ID} onClick={this.props.onTimesheetSelect(timesheet)}  className= {timesheet == this.props.selectedTimeshet == timesheet ? 'selected-row' : ''}>
                            <td>{timesheet.EmployeeName}</td>
                            <td>{timesheet.StartDate}</td>
                            <td>{timesheet.EndDate}</td>
                            <td>{timesheet.Time}</td>
                        </tr>
            );
        }
        
        return(
                    <div className="timesheet-table container-fluid">
                        <div className="table-header">Timesheets</div>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.timesheets.map(buildEmployeeRow, this)}
                                </tbody>
                            </table>
                        </div>
                    </div>
        );
    }
}

export default TimeSheets;