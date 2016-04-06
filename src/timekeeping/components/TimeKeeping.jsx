import React from 'react';
import TimeSheetStore from '../stores/TimeSheetStore.jsx';
import TimeSheetActions from '../actions/TimeSheetActions.jsx';
import Header from '../../commons/components/Header.jsx';
import TimeSheetOptions from './TimeSheetOptions.jsx';
import TimeSheets from './timesheet/TimeSheets.jsx';
import TimeKeepingButtons from './TimeKeepingButtons.jsx';
import TimeSheetDetailEditor from './timesheetedit/TimeSheetDetailEditor.jsx';

import moment from 'moment';

class TimeKeeping extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            action:'Add',
            date:moment(),
            format:'MM/DD/YYYY',
            timeSheets:[],
            selectedTimesheet:{TimesheetDetails:[]},
            selectedTimesheetDetail:{}
        }
    }

    componentWillMount()
    {
        TimeSheetActions.initializeTimesheet(this.state.date.format(this.state.format));
        TimeSheetStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount()
    {
        TimeSheetStore.removeChangeListener(this._onChange.bind(this));
    }

    componentDidMount()
    {
        console.log("component mounted")
       // $.material.init();
    }
    
    onDateChange()
    {
        let date = this.state.date.format(this.state.format)
        TimeSheetActions.loadTimeSheetList(date)
    }
    
    onEditActionTrigger(action)
    {
        console.log(action);
        this.setState({action:action});    
    }
    
    onTimesheetSelect(timesheet)
    {
        let detail = this._getSelectedTimesheetDetail(timesheet);
        
        this.setState({
                                selectedTimesheet:timesheet,
                                selectedTimesheetDetail:detail
                            });
    }
    
    _getSelectedTimesheetDetail(timesheet)
    {
        if(null === timesheet)
        {   
            return;
        }
        
        let details = timesheet.TimesheetDetails;
        return details.length > 0 ? details[0] : null;
    }
    
     _onChange()
    {
        let state = 
        {
            timeSheets:TimeSheetStore.getAllTimesheets(),
            selectedTimesheet:TimeSheetStore.getSelectedTimeSheet(),
            selectedTimesheetDetail:{}
        }
    
       state.selectedTimesheetDetail = this._getSelectedTimesheetDetail(state.selectedTimesheet);
       this.setState(state);
    }
    
    render()
    {
        return (
            <div>
                <Header title="Manage Time Keeping"/>
                <div className="timekeeping-region">
                    <TimeSheetOptions date={this.state.date} format={this.state.format} onDateChange={this.onDateChange.bind(this)} onEditActionTrigger={this.onEditActionTrigger.bind(this)}/>
                    <TimeSheets timesheets={this.state.timeSheets} selectedTimesheet={this.state.selectedTimesheet} selectedTimesheetDetail ={this.state.selectedTimesheetDetail}  onTimesheetSelect={this.onTimesheetSelect.bind(this)}/>
                    <TimeKeepingButtons onEditActionTrigger={this.onEditActionTrigger.bind(this)} timesheetDetail ={this.state.selectedTimesheetDetail}/>
               </div>
               <TimeSheetDetailEditor action={this.state.action} timesheetDetail={this.state.selectedTimesheetDetail} timesheet={this.state.selectedTimesheet} onEditActionTrigger={this.onEditActionTrigger.bind(this)}/>
            </div>     
        );
    }
}


export default TimeKeeping;