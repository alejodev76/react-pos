import React from 'react';
import NumPadRow from './NumPadRow.jsx';
import Input from '../../formfields/Input.jsx';

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
            inputValue:''
         }
    }

    onNumberClick(value)
    {
       this.props.onNumberClick(value);
    } 

    onCancel()
    {
       this.props.onCancel();
    }
    
    onOk()
    {
       this.props.onOk();
    }
    
    onBackSpace()
    {
        let value = this.props.value;
        value = value.substring(0, (value.length -1))
        this.props.onBackSpace(value);
    }
    
    onChange (event)
    {
        let value = event.target.value;
        this.setState({inputValue:value});
        this.props.onChange(value);
    }
    
    render()
    {
        let createNumberPadRow = function(numPadRow)
        {
            let  clickPad = function(value)
            {
               this.clickPad(value)
            }
            return (<NumPadRow key={numPadRow.name} numPads={numPadRow.value} applyNumber={this.onNumberClick.bind(this)}/>);
        }
        
        let subTitle = '';
        if(this.props.subTitle && this.props.subTitle !== '')
        {
            subTitle = <p> {this.props.subTitle}</p>
        }
        
        return (
                    <div>
                        <Input type="text" style={{'textAlign':'center'}}  value={this.props.value} onChange={this.onChange.bind(this)}/>
                        {subTitle}
                        <div className="numpad container-fluid">
                            {this.state.rows.map(createNumberPadRow, this)}
                            <div className="row">
                                <div className="col-xs-8 numpad-item">
                                    <button id="numpad-0" className="numpad-number numpad-0 btn btn-default btn-raised" onClick={this.onNumberClick.bind(this, 0)}>0</button>
                                </div>
                                <div className="col-xs-4 numpad-item">
                                    <button className="numpad-backspace btn btn-default btn-raised" onClick={this.onBackSpace.bind(this)}>Backspace</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 numpad-item">
                                    <button className="numpad-ok btn btn-success btn-raised" onClick={this.onOk.bind(this)}><i className="glyphicon glyphicon-check"></i>OK</button>
                                </div>
                                <div className="col-xs-6 numpad-item">
                                    <button className="numpad-cancel btn btn-danger btn-raised" onClick={this.onCancel.bind(this)}><i className="glyphicon glyphicon-folder-close"></i>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}


export default NumberPad;