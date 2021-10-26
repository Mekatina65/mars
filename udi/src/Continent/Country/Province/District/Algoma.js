import { Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import React from 'react'
import Soo from './City/Soo'
import Wawa from './City/Wawa'


const Algoma = () => {
    const {path, url} = useRouteMatch()
    return (
        <div>
            <h2>hello from Algoma</h2>
         
            <ul><li><Link to ={`${url}/Soo`}>View Sault ste. Marie</Link></li></ul>
            <ul><li><Link to ={`${url}/Wawa`}>View Wawa</Link></li></ul>
           
            
            <Switch>
            <Route path={`${path}/Soo`} component={Soo}/>
            <Route path={`${path}/Wawa`} component={Wawa}/>
            
           
            </Switch> 
        </div>
    )
}

export default Algoma
