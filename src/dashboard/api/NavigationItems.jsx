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
        url:'tickets',
        label:'Tickets',
        component:Tickets,
        items:[]
    },
    
     {
        url:'labor',
        label:'Labor',
        component:Labor,
        items:[]
    },
    
     {
        url:'specials',
        label:'Specials',
        component:Specials,
        items:[]
    },
    
     {
        url:'contests',
        label:'Contest',
        component:Contest,
        items:[]
    },
    
     {
        url:'messages',
        label:'Messages',
        component:Messages,
        items:[]
    },
    
    {
        url:'activities',
        label:'Activities',
        component:'Activities',
        items:[]
    },
    
    {
        url:'Teetimes',
        label:'teetimes',
        component:Teetimes,
        items:[]
    },
    
    {
        url:'lessons',
        label:'Lessons',
        component:Lessons,
        items:[]
    },
    
     {
        url:'dinning',
        label:'Dinning',
        component:Dining,
        items:[]
    },
    
     {
        url:'events',
        label:'Events',
        component:Events,
        items:[]
    }
]

export default NavItems;