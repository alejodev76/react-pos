import React from 'react';

import CommonApi from '../../../commons/api/CommonApi.jsx';
import Select from '../../../commons/components/formfields/Select.jsx';
import Input from '../../../commons/components/formfields/Input.jsx';
import DateTime from '../../../commons/components/formfields/DateTime.jsx';

import DT from 'react-bootstrap-datetimepicker';

class TimeSheetDetailEditor extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        // state is initialized with the props received from the parent components
        // it is OK to do so as long as it is clear that it is only for seeding the data.
        this.state =
        {
            action:this.props.action,
            employeeList:CommonApi.getEmployeeList(),
            jobCodeList:CommonApi.getJobCodeList(),
            employeeId:0,
            jobCode:'',
            clockIn:'',
            clockOut:''
        }
    }
    
    onEmployeeChange(event)
    {
        console.log(arguments);
    }
    
    onJobCodeChange()
    {
        
    }
    
    onClockInChange()
    {
        
    } 
    
    onClockOutChange()
    {
        debugger;
    }
    
    
    render()
    {
        return(
                <div id="modal-detaileditor" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{this.props.action} Timesheet</h4>
                            </div>
                            <div className="modal-body">
                                <Select
                                    onChange={this.onEmployeeChange.bind(this)} 
                                    value={this.props.timesheet.EmployeeID} 
                                    name='employee-name'
                                    options={this.state.employeeList}
                                    nameAttr='EmployeeName'
                                    valueAttr='ID'
                                    disabled={this.props.action !== 'Add'}
                                    label='Employee:'/>
                                  <Select
                                        onChange={this.onJobCodeChange.bind(this)} 
                                        value={this.props.timesheetDetail.JobCode} 
                                        name='job-code' 
                                        options={this.state.jobCodeList}
                                        nameAttr='name'
                                        valueAttr='value'
                                        label='Job Code:'
                                     />
                                     <DateTime 
                                        value={this.props.timesheetDetail.In} 
                                        onChange={this.onClockInChange.bind(this)}
                                        label='Clock in:'
                                    />
                                   <DateTime 
                                        value={this.props.timesheetDetail.In} 
                                        onChange={this.onClockOutChange.bind(this)}
                                        label='Clock out:'
                                    />
                            </div>
                            <div className="modal-footer">
                                <ul className="list-inline">
                                    <li><button className="btn btn-success btn-raised btn-lg">OK <i className="glyphicon glyphicon-check"></i></button></li>
                                    <li><button className="btn btn-danger btn-raised btn-lg" data-dismiss="modal">Cancel <i className="glyphicon glyphicon-log-out"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default TimeSheetDetailEditor;