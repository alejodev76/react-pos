import React from 'react';

class NumPadRow extends React.Component
{
    onClick(value)
    {
        this.props.applyNumber(value);
    }
    
    render()
    {
        let createNumberPad = function(numberPad)
        {
            return(
                    <div key={numberPad.value} className="col-xs-4 numpad-item">
                        <button className="numpad-number btn btn-default btn-raised" onClick={this.onClick.bind(this, numberPad.value)}>{numberPad.value}</button>
                    </div>
                );    
        }
        
        return(
                <div className="row">
                    {this.props.numPads.map(createNumberPad, this)}
                </div>
       );
    }
}

export default NumPadRow;