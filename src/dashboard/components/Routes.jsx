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
import NavigationApi from '../api/NavigationApi.jsx';

const routes = 
{
        
            path:'/',
            component:Tickets,
            indexRoute:{ component: Tickets},
            childRoutes:[]        
}

let  _createRoutes = function()
{
        let addRoute = function(route)
        {
             routes.childRoutes.push(
            {
                path:route.url,
                component:route.component,
                childRoutes:[]
            });
        }
        
        let navItems = NavigationApi.getNavItems().map(addRoute, this);
}

_createRoutes();
console.log(routes)

export default routes;