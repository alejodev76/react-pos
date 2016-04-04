import Tickets from '../components/tickets/Tickets.jsx';
import Labor from '../components/labor/labor.jsx';
import Contest from '../components/contest/Contest.jsx';
import Dining from '../components/dining/dining.jsx';
import Events from '../components/events/Events.jsx';
import Lessons from '../components/lessons/Lessons.jsx';
import Messages from '../components/messages/Messages.jsx';
import Specials from '../components/specials/Specials.jsx';
import Teetimes from '../components/teetimes/Teetimes.jsx';
import Activities from '../components/activities/Activities.jsx';

const NavItems = [
    {
        url:'dashboard/tickets',
        label:'Tickets',
        component:Tickets,
        items:[]
    },
    
     {
        url:'dashboard/labor',
        label:'Labor',
        component:Labor,
        items:[]
    },
    
     {
        url:'dashboard/specials',
        label:'Specials',
        component:Specials,
        items:[]
    },
    
     {
        url:'dashboard/contest',
        label:'Contest',
        component:Contest,
        items:[]
    },
    
     {
        url:'dashboard/messages',
        label:'Messages',
        component:Messages,
        items:[]
    },
    
    {
        url:'dashboard/activities',
        label:'Activities',
        component:'Activities',
        items:[]
    },
    
    {
        url:'dashboard/Teetimes',
        label:'teetimes',
        component:Teetimes,
        items:[]
    },
    
    {
        url:'dashboard/lessons',
        label:'Lessons',
        component:Lessons,
        items:[]
    },
    
     {
        url:'dashboard/dining',
        label:'Dinning',
        component:Dining,
        items:[]
    },
    
     {
        url:'dashboard/events',
        label:'Events',
        component:Events,
        items:[]
    }
]

export default NavItems;