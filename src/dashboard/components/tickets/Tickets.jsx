import React from 'react';
import TicketList from './components/TicketList.jsx';
import TicketApi from './api/TicketApi.jsx';


class Tickets extends React.Component
{
     constructor(props, context)
    {
        super(props, context);

        this.state =
        {
            tickets:[]
        }
        
    }
    
     componentWillMount()
     {
         let callback = function()
         {
            this.setState({tickets:TicketApi.getTicketList()})
         }.bind(this);
         
         TicketApi.loadTicketList(callback);
    }
    
    render()
    {
        return (
            <div>
            <div className="table-header visible-xs">Tickets</div>
                <div className="table-responsive">        
                    <TicketList tickets={this.state.tickets}/>
                </div>
            </div>
        );
    }
}


export default Tickets;