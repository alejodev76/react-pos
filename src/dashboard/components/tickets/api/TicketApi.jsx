
import PosTickets from './PosTickets.jsx';

class TicketsApi
{
    getTicketList()
    {
        return JSON.parse(JSON.stringify(PosTickets));
    }
    
    loadTicketList(callback)
    {
        $.ajax({
            url:'http://cepos.azurewebsites.net/api/pages/home/posTickets/getlist',
            success:function(result)
            {
                callback(result)
            },
            error:function(result)
            {
                callback();
            }
        })
    }
}

export default new TicketsApi();
