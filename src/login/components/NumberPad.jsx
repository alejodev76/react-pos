import React from 'react';
import NumPadRow from './NumPadRow.jsx';
import Input from '../../commons/components/Input.jsx';

class NumberPad extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            rows:
            [
                {name:'row1', value:[{value:'7'},{value:'8'},{value:'9'}]},
                {name:'row2', value:[{value:'6'},{value:'5'},{value:'4'}]},
                {name:'row3', value:[{value:'1'},{value:'2'},{value:'3'}]}    
            ],
            employeeNumber:'',
            errors:{}
        }
    }

    clickPad(value)
    {
        let empNo = this.state.employeeNumber   + value;
        this.setState({employeeNumber:empNo});
    } 

    cancel()
    {
       this.setState({employeeNumber:''});
    }
    
    submit()
    {
        if(this.state.employeeNumber !== '100')
        {
            console.log("Failed auth");
            return;
        }
        
        console.log("async call was placed to authorize access, redirect to dashboard")
    }
    
    setEmployeeNumber (event)
    {
        let value = event.target.value;
        this.setState({employeeNumber:value});
    }
    
    
    triggerbackSpace(event)
    {
        let value = this.state.employeeNumber;
        value = value.substring(0, (value.length -1))
        this.setState({employeeNumber:value});
    }
    
    render()
    {
        let createNumberPadRow = function(numPadRow)
        {
            let  clickPad = function(value)
            {
                debugger;
                console.log("clicked");
               this.clickPad(value)
            }
            return (<NumPadRow key={numPadRow.name} numPads={numPadRow.value} applyNumber={clickPad.bind(this)}/>);
        }
        
        return (
            <div className="login-region">
                <h3>User Login Required</h3>
                <Input type="text"  value={this.state.employeeNumber} onChange={this.setEmployeeNumber.bind(this)}/>
                <p>Enter employee code</p>
                <div className="numpad container-fluid">
                    {this.state.rows.map(createNumberPadRow, this)}
                    <div className="row">
                        <div className="col-xs-8 numpad-item">
                            <button id="numpad-0" className="numpad-number numpad-0 btn btn-default btn-raised" onClick={this.clickPad.bind(this, 0)}>0</button>
                        </div>
                        <div className="col-xs-4 numpad-item">
                            <button className="numpad-backspace btn btn-default btn-raised" onClick={this.triggerbackSpace.bind(this)}>Backspace</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 numpad-item">
                            <button className="numpad-ok btn btn-success btn-raised" onClick={this.submit.bind(this)}><i className="glyphicon glyphicon-check"></i>OK</button>
                        </div>
                        <div className="col-xs-6 numpad-item">
                            <button className="numpad-cancel btn btn-danger btn-raised" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-folder-close"></i>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NumberPad;