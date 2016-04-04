import React from 'react';

class TicketList extends React.Component
{
    render()
    {
        let createTicketRow = function(ticket)
        {
            return(
                    <tr>
                        <td>{ticket.ID}</td>
                        <td>{ticket.FullName}</td>
                        <td>{ticket.Area}</td>
                        <td>{ticket.Table}</td>
                        <td>{ticket.TicketNumber}</td>
                        <td><a href="#" className="btn btn-default btn-sm btn-raised">Open</a></td>
                    </tr>
            );
        }
        
        return(
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Area</th>
                                <th>Table</th>
                                <th>Ticket #</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tickets.map(createTicketRow, this)}
                        </tbody>
                    </table>
        );
    }
} 

export default TicketList;