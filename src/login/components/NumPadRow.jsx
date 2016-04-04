import React from 'react';

class NumPadRow extends React.Component
{
    render()
    {
        let createNumberPad = function(numberPad)
        {
            let click = function()
            {
                this.props.applyNumber(numberPad.value);
            }
            return(
                    <div key={numberPad.value} className="col-xs-4 numpad-item">
                        <button className="numpad-number btn btn-default btn-raised" onClick={click.bind(this)}>{numberPad.value}</button>
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