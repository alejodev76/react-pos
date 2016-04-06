import React from 'react';

class Input extends React.Component
{
    render()
    {
        let wrapperClass = 'form-group';
        if(this.props.error && this.props.error.lenght > 0)
        {
            wrapperClass += " has-error";
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input
                        type={this.props.type}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeHolder}
                        className="form-control"
                        ref={this.props.name}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="input">{this.props.error}</div>
            </div>
        );
    }
}

Input.propTypes =
{
    onChange:React.PropTypes.func.isRequired,
    type:React.PropTypes.string.isRequired,
    placeHolder:React.PropTypes.string,
    value:React.PropTypes.string,
    error:React.PropTypes.string
}

export default Input;