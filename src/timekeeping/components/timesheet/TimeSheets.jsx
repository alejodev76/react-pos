import React from 'react';
import TimeSheetList from './TimeSheetList.jsx';
import TimeSheetDetailList from './TimeSheetDetailList.jsx';

class TimeSheets extends React.Component
{
    render()
    {
        return(
            <div>
                <TimeSheetList timesheets={this.props.timesheets} selectedSheetId={this.props.selectedTimesheet.ID} onTimesheetSelect={this.props.onTimesheetSelect}/>
                <TimeSheetDetailList timesheet={this.props.selectedTimesheet} selectedTimesheetDetail={this.props.selectedTimesheetDetail}/>
           </div>
        );
    }
}

TimeSheets.propTypes =
{
    timesheets:React.PropTypes.array.isRequired,
    selectedTimesheet:React.PropTypes.object.isRequired,
}

export default TimeSheets;
