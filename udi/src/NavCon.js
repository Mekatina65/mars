import React from 'react'
import{Link} from 'react-router-dom'

const NavCon = () => {
    return (
        <nav>
        <ul className= "nav-link">
            <Link to= '/NorthAmerica'><li>NorthAmerica</li></Link>
            <Link to= '/SouthAmerica'><li>SouthAmerica</li></Link>
        </ul>
            
        </nav>
    )
}

export default NavCon
