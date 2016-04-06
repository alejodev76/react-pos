import Dispatcher from '../../commons/dispatcher/Dispatcher.jsx'
import EventEmitter from 'events';
import ActionTypes from '../actions/ActionTypes.jsx';
import _ from 'lodash';

let _timesheets = [];
let _selectedTimeSheet = null;

const TimesheetStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener:function(callback)
    {
        this.on('change', callback);
    },

    removeChangeListener:function(callback)
    {
        this.on('change', callback);
    },

    emitChange: function()
    {
        this.emit('change')
    },

    getAllTimesheets: function(date)
    {
        return _timesheets;
    },

    getTimesheetById: function(id)
    {
        return _.find(_timesheets, {id:id});
    },
    
    getSelectedTimeSheet:function()
    {
        return _selectedTimeSheet;
    }
})

Dispatcher.register(function(action){

    console.log(action.actionType);
    const initPageData = function(action)
    {
         _timesheets = action.timesheets;
         _selectedTimeSheet = _timesheets[0] || null;
         TimesheetStore.emitChange();
    }
    
    switch(action.actionType)
    {
         case ActionTypes.RELOAD_TIMESHEET_LIST:
            initPageData(action);
            break;
            
        case ActionTypes.INITIALIZE_TIMESHEET:
            initPageData(action);
            break;
        
        case ActionTypes.ADD_TIMESHEET:
            _timesheets.push(action.timesheet);
            TimesheetStore.emitChange();
            break;
       
        case ActionTypes.UDPATE_TIMESHEET:
            let timesheet = _.find(_timesheets, {id:action.timesheet.id});
            let timesheetIndex = _.indexOf(_timesheets, timesheet);
            _timesheets.splice(timesheetIndex, 1, action.timesheet);
            TimesheetStore.emitChange();
            break;
       
        case ActionTypes.DELETE_TIMESHEET:
            _.remove(_timesheets,  (timesheet) => { return action.id === timesheet.id} );
            TimesheetStore.emitChange();
            
        default:
            initPageData(action);
    }
});

export default TimesheetStore;