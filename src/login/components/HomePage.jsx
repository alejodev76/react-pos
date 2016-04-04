import React from 'react';
import NumberPad from './NumberPad.jsx';

class HomePage extends React.Component
{
    componentWillMount()
    {
        this.context.router.push({pathname:'dashboard'});
    }
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

HomePage.contextTypes =
{
    router: function(){ React.PropTypes.func.isRequired}
};

export default HomePage