import React from 'react';
import DT from 'react-bootstrap-datetimepicker';
import moment from 'moment';

class DateTime extends React.Component
{
    
    render()
    {
        const format = 'MM/DD/YYYY h:mm A';
        let wrapperClass = 'form-group';
        if(this.props.error && this.props.error.lenght > 0)
        {
            wrapperClass += " has-error";
        }
        
        let date = this.props.value;
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <DT
                        name={this.props.name}
                        dateTime={date}
                        onChange={this.props.onChange}
                        inputFormat={format}
                        format={format}
                        defaultText={format}
                        className="form-control"
                    />
                </div>
                <div className="input">{this.props.error}</div>
            </div>
        );
    }
}

DateTime.propTypes =
{
    onChange:React.PropTypes.func.isRequired,
    value:React.PropTypes.string,
    error:React.PropTypes.string
}

export default DateTime;