import React from 'react';

class Select extends React.Component
{
    render()
    {
        let buildOption = function(option, index)
        {
            return(
                        <option value={option[this.props.valueAttr]} key={index}>{option[this.props.nameAttr]}</option>
            );
        }
        let wrapperClass = 'form-group';
        if(this.props.error && this.props.error.lenght > 0)
        {
            wrapperClass += " has-error";
        }
        
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.disabled}
                        style={this.props.style}>
                        {this.props.options.map(buildOption, this)}
                    </select>
                </div>
                <div className="input">{this.props.error}</div>
            </div>
        );
    }
}


Select.propTypes =
{
    onChange:React.PropTypes.func.isRequired,
    valueAttr:React.PropTypes.string.isRequired,
    nameAttr:React.PropTypes.string.isRequired,
    options:React.PropTypes.array.isRequired,
    name:React.PropTypes.string,
    error:React.PropTypes.string
}

export default Select;