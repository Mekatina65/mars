import { Link, Route, Switch, useRouteMatch} from 'react-router-dom'

import React from 'react'
import Ontario from './Province/Ontario'
import Manitoba from './Province/Manitoba'
import Quebec from './Province/Quebec'
const Canada = () => {
    const {path, url} = useRouteMatch()
    return (
        <div>
        
                   <h1>Hello from Canada</h1>
                    
            <ul><li><Link to ={`${url}/Ontario`}>View Ontario</Link></li></ul>
            <ul><li><Link to ={`${url}/Manitoba`}>View Manitoba</Link></li></ul>
            <ul><li><Link to ={`${url}/Quebec`}>View Quebec</Link></li></ul>
            
            <Switch>
            <Route path={`${path}/Ontario`} component={Ontario}/>
            <Route path={`${path}/Manitoba`} component={Manitoba}/>
            <Route path={`${path}/Quebec`} component={Quebec}/>
           
            </Switch>
           
        </div>
    )
}

export default Canada
