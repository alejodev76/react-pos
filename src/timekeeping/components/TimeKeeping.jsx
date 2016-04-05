import React from 'react';
import TimeSheetStore from '../stores/TimeSheetStore.jsx';

import Header from '../../commons/components/Header.jsx';
import TimeSheetOptions from './TimeSheetOptions.jsx';
import TimeSheets from './timesheet/TimeSheets.jsx';
import TimeKeepingButtons from './TimeKeepingButtons.jsx';
import moment from 'moment';

class TimeKeeping extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            date:moment(),
            format:'MM/DD/YYYY',
            selectedTimesheet:null,
            timeSheets:TimeSheetStore.getAllTimesheets()
        }
    }

    componentWillMount()
    {
        let timeSheet = this.state.timeSheets[0] || null;
        this.setState({selectedTimesheet:timeSheet});
        TimeSheetStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount()
    {
        TimeSheetStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange()
    {
        let dateStr = this.state.date.format(this.state.format)
        this.setState({timeSheets:TimeSheetStore.getAllTimesheets(dateStr)});
    }

    onDateChange(date)
    {
        this.setState({date:date});
        this._onChange();
    }
    
    onTimesheetSelect(timesheet)
    {
        this.setState({selectedTimesheet:timesheet});
    }
    
    
    render()
    {
        return (
            <div>
                <Header title="Manage Time Keeping"/>
                <div className="timekeeping-region">
                    <TimeSheetOptions date={this.state.date} format={this.state.format} onDateChange={this.onDateChange.bind(this)}/>
                    <TimeSheets timesheets={this.state.timeSheets} onTimesheetSelect={this.onTimesheetSelect.bind(this)}/>
                    <TimeKeepingButtons/>
               </div>
            </div>     
        );
    }
}

export default TimeKeeping;