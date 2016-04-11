import React from 'react';
import NumberPad from '../../commons/components/keyboards/numberpad/NumberPad.jsx';

class HomePage extends React.Component
{
     constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            employeeNumber:'',
            errors:{}
        }
    }
    
    componentWillMount()
    {
       this.context.router.push({pathname:'dashboard'});
    }
    
    onNumberSelect(value)
    {
        let empNo = this.state.employeeNumber   + value;
        this.setState({employeeNumber:empNo});
    } 

    onCancel()
    {
       this.setState({employeeNumber:''});
    }
    
    onSubmit()
    {
        if(this.state.employeeNumber !== '100')
        {
            console.log("Failed auth");
            return;
        }
        
        console.log("async call was placed to authorize access, redirect to dashboard")
        
        this.context.router.push({pathname:'dashboard'});
    }
    
    onBackSpace(value)
    {
        this.setState({employeeNumber:value});
    }
    
    setEmployeeNumber (value)
    {
        this.setState({employeeNumber:value});
    }

    render()
    {
        return (
            <div>
                <h3>Clubessential Point of Sale</h3>
                 <div className="login-region">
                    <h3>User Login Required</h3>
                    <NumberPad subTitle="Enter employee code"
                        onNumberClick={this.onNumberSelect.bind(this)}
                        onCancel={this.onCancel.bind(this)}    
                        onOk={this.onSubmit.bind(this)}
                        onBackSpace={this.onBackSpace.bind(this)}
                        onChange={this.setEmployeeNumber.bind(this)}
                        value={this.state.employeeNumber}
                    />
                </div>
            </div>
        )
    }
}

HomePage.contextTypes =
{
    router: function(){ React.PropTypes.func.isRequired}
};

export default HomePage