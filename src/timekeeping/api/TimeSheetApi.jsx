
import timesheets from './Timesheets.jsx';
import _ from 'lodash';

let _clone = function(item)
{
	return JSON.parse(JSON.stringify(item));
	//return cloned copy so that the item is passed by value instead of by reference
};

class TimesheetApi
{
    getTimesheets()
    {
        
        return _clone(timesheets);
    }
    
    loadTimeSheets(date, callback)
    {
        $.ajax({
            url:'http://cepos.azurewebsites.net/api/pages/timekeeping/timesheets/getlist?date='.concat(date),
            success:function(result)
            {
                callback(result)
                  console.log('TODO: Update list with new results from the backend')
            },
            error:function(result)
            {
                callback();
                  console.log('TODO: Update list with new results from the backend')
            }
        })
    }
    
    saveTimeSheet(timesheet)
    {
        //pretend an ajax call to web api is made here
		console.log('Pretend this just saved the timesheet to the DB via AJAX call...');
        
        if (timesheet.id > 0)
         {
			var existingTimesheetIndex = _.indexOf(timesheets, _.find(timesheets, {id: timesheet.id})); 
			timesheets.splice(existingTimesheetIndex, 1, timesheet);
		} 
        else 
        {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			timesheet.id = timesheets.length++;
			timesheets.push(timesheet);
		}

		return _clone(timesheet);
    }
    
    deleteTimeSheet(id)
    {
        console.log('Pretend this just deleted the timesheet from the DB via an AJAX call...');
		_.remove(timesheets, { id: id});
    }
}

export default new TimesheetApi();
