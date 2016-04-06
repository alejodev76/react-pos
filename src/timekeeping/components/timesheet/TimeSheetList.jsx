import React from 'react';

class TimeSheets extends React.Component
{
    
    render()
    {
        let buildEmployeeRow = function(timesheet)
        {
            let sheetSelect = () =>
            {
                this.props.onTimesheetSelect(timesheet);
            }
            debugger;
            return(
                        <tr key={timesheet.ID} onClick={sheetSelect}  className= {(timesheet.ID === this.props.selectedSheetId) ? 'selected-row' : ''}>
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

TimeSheets.propTypes =
{
    timesheets:React.PropTypes.array.isRequired,
    onTimesheetSelect:React.PropTypes.func.isRequired,
    selectedSheetId:React.PropTypes.number
}

export default TimeSheets;