import React from 'react';

class TimeSheetDetailList extends React.Component
{
    render()
    {
        let buildJobDetailRow = function(timesheetDetail)
        {
            return(
                        <tr key={timesheetDetail.ID} className={timesheetDetail.ID == this.props.selectedTimesheetDetail.ID ? 'selected-row' : ''}>
                            <td>{timesheetDetail.JobCode}</td>
                            <td>{timesheetDetail.In}</td>
                            <td>{timesheetDetail.Out}</td>
                            <td>{timesheetDetail.Time}</td>
                        </tr>
                    );
        }
        return(
            <div className="timesheetdetails-table container-fluid">
                <div className="table-header">Selected Timesheet Details {this.props.timesheet.EmployeeName}</div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Job Code</th>
                                <th>In</th>
                                <th>Out</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.timesheet.TimesheetDetails.map(buildJobDetailRow, this)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


TimeSheetDetailList.propTypes =
{
    timesheet:React.PropTypes.object.isRequired
}

export default TimeSheetDetailList;