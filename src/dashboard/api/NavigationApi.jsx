
import NavigationItems from './NavigationItems';

class NavigationApi
{
    getNavItems()
    {
        return NavigationItems;
    }
    
    loadNavData(callback)
    {
        $.ajax({
            url:'http://cepos.azurewebsites.net/api/pages/home/routes/getlist',
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

export default new NavigationApi();
