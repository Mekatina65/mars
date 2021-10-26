import { Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import React from 'react'
import Algoma from './District/Algoma'
import Sudbury from './District/Sudbury'
import Thunderbay from './District/Thunderbay'

const Ontario = () => {

    const {path, url} = useRouteMatch()
    return (
        <div>
            <h1>hello from Ontario</h1>
            <ul><li><Link to ={`${url}/Algoma`}>View Algoma</Link></li></ul>
            <ul><li><Link to ={`${url}/Sudbury`}>View Sudbury</Link></li></ul>
            <ul><li><Link to ={`${url}/Thunderbay`}>View Thunderbay</Link></li></ul>
            
            <Switch>
            <Route path={`${path}/Algoma`} component={Algoma}/>
            <Route path={`${path}/Sudbury`} component={Sudbury}/>
            <Route path={`${path}/Thunderbay`} component={Thunderbay}/>
           
            </Switch>
        </div>
    )
}

export default Ontario
