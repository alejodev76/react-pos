import React from 'react';

import CommonApi from '../../../commons/api/CommonApi.jsx';
import Select from '../../../commons/components/formfields/Select.jsx';
import Input from '../../../commons/components/formfields/Input.jsx';

class TimeSheetDetailEditor extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            action:'',
            employeeList:CommonApi.getEmployeeList(),
            jobCodeList:CommonApi.getJobCodeList(),
            employeeId:0,
            jobCode:'',
            clockIn:'',
            clockout:''
        }
    }
    
    componentDidMount()
    {
        console.log( this.props);
    }
    
    componentWillMount()
    {
        console.log(this.props);
    }
    
    onEmployeeChange(event)
    {
        debugger;
        console.log(arguments);
    }
    
    onJobCodeChange()
    {
        
    }
    
    onNameChange()
    {
        
    } 
    
    onClockInChange()
    {
        
    } 
    
    onClockOutChange()
    {
        
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
                                    value={this.state.employeeId} 
                                    name='employee-name'
                                    options={this.state.employeeList}
                                    nameAttr='EmployeeName'
                                    valueAttr='ID'
                                    disabled={this.state.employeeId > 0}
                                    label='Employee:'/>
                                  <Select
                                        onChange={this.onJobCodeChange.bind(this)} 
                                        value={this.state.jobCode} 
                                        name='job-code' 
                                        options={this.state.jobCodeList}
                                        nameAttr='name'
                                        valueAttr='value'
                                         disabled={this.state.jobCode !== ''}
                                        label='Job Code:'
                                     />
                                     <Input
                                         name='clock-in'
                                         type='datetime'
                                         onChange={this.onClockInChange.bind(this)}
                                         value={this.state.clockIn}
                                         label='Clock in:'
                                    />
                                 <Input
                                         name='clock-in'
                                         type='datetime'
                                         onChange={this.onClockOutChange.bind(this)}
                                         value={this.state.clockOut}
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