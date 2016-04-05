import React from 'react';
import TimeSheetList from './TimeSheetList.jsx';
import TimeSheetDetails from './TimeSheetDetails.jsx';

class TimeSheets extends React.Component
{
    render()
    {
        return(
            <div>
                <TimeSheetList timesheets={this.props.timesheets} onTimesheetSelect={this.props.onTimesheetSelect}/>
                <TimeSheetDetails timesheet={this.props.selectedTimesheet}/>
           </div>
        );
    }
}

TimeSheets.propTypes =
{
    timesheets:React.PropTypes.array.isRequired
}

export default TimeSheets;