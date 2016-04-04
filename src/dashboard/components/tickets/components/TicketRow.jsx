import React from 'react';

class TicketRow extends React.Component
{
    render()
    {
        return(
                    <tr>
                        <td>${this.props.ticket.ID}</td>
                        <td>${this.props.ticket.FullName}</td>
                        <td>${this.props.ticket.Area}</td>
                        <td>${this.props.ticket.Table}</td>
                        <td>${this.props.ticket.TicketNumber}</td>
                        <td><a href="#" className="btn btn-default btn-sm btn-raised">Open</a></td>
                    </tr>
            )
    }
}

export default TicketRow;