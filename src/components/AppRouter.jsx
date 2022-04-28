import React from 'react'
import { Redirect, Route,Switch} from 'react-router-dom'
import { routes } from '../routes/routes'


export default function AppRouter() {
    return (
        <Switch>
            {routes.map(route => 
            <Route key={route.path} path={route.path} exact={route.exact}  component={route.component}/>)
}
         <Redirect to='/chats' />
      </Switch>
    )
}
