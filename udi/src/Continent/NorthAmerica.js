import { Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import React from 'react'
import Canada from './Country/Canada'
import USA from './Country/USA'
import Mexico from './Country/Mexico'


const NorthAmerica = () => {
    const {path, url} = useRouteMatch()
    return (
        <div>
        
          <h1>Hello from NorthAmerica</h1>
            <ul><li><Link to ={`${url}/Canada`}>View Canada</Link></li></ul>
            <ul><li><Link to ={`${url}/USA`}>View USA</Link></li></ul>
            <ul><li><Link to ={`${url}/Mexico`}>View Mexico</Link></li></ul>
            <Switch>
            <Route path={`${path}/Canada`} component={Canada}/>
            <Route path={`${path}/USA`} component={USA}/>
            <Route path={`${path}/Mexico`} component={Mexico}/>
            </Switch>
        </div>
    )
}

export default NorthAmerica




export const SouthAmerica = () => {
    return (
        <div>
            <h2>Hello SouthAmerica</h2>
        </div>
    )
}
