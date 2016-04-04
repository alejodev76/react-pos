import React from 'react';
import NumberPad from './NumberPad.jsx';

class HomePage extends React.Component
{
    render()
    {
        return (
            <div>
                <h3>Clubessential Point of Sale</h3>
                <NumberPad/>
            </div>
        )
    }
}

export default HomePage