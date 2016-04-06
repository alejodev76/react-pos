import Dispatcher from '../../commons/dispatcher/Dispatcher.jsx'
import TimesheetApi from '../api/TimesheetApi';
import ActionTypes from './ActionTypes.jsx';
import moment from 'moment';

class TimesheetActions
{
    initializeTimesheet()
    {
        let callback = function(results)
        {
            console.log('Make API call to fetch time sheet data to assign it in the dispatcher');
             Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE_TIMESHEET,
                timesheets:TimesheetApi.getTimesheets(),
            })
        }
        
        TimesheetApi.loadTimeSheets(moment().format('MM/DD/YYYY'), callback);
    }
    
    createTimesheet(timesheet)
    {
        let newTimeSheet = TimesheetApi.saveTimeSheet(timesheet);

        Dispatcher.dispatch(
        {
            actionType:ActionTypes.ADD_TIMESHEET,
            timesheet:newTimeSheet
        });

    }

    updateTimesheet(timesheet)
    {
        let updatedTimesheet = TimesheetApi.saveTimeSheet(timesheet);

        Dispatcher.dispatch(
        {
            actionType:ActionTypes.UPDATE_TIMESHEET,
            timesheet:updatedTimesheet
        });
    }

    deleteTimesheet(id)
    {
        TimesheetApi.deleteTimeSheet(id);

        Dispatcher.dispatch(
            {
                actionType:ActionTypes.DELETE_TIMESHEET,
                id:id
            });
    }
    
    deleteTimesheetDetail(timeSheetId, detailId)
    {
        TimesheetApi.deleteTimeSheetDetail(timeSheetId, detailId);

        Dispatcher.dispatch(
            {
                actionType:ActionTypes.DELETE_TIMESHEET_DETAIL,
                timeSheetId:timeSheetId, 
                detailId:detailId
            });
    }
    
    loadTimeSheetList(date)
    {
        let callback = function()
        {
            console.log('Make API call to fetch time sheet data to assign it in the dispatcher');
             Dispatcher.dispatch({
                actionType: ActionTypes.RELOAD_TIMESHEET_LIST,
                timesheets:TimesheetApi.getTimesheets()
            })
        }
        
        TimesheetApi.loadTimeSheets(date, callback);
    }
}

export default new TimesheetActions();