import React from 'react'
import {NavLink} from 'react-router-dom'
import './common.scss'


const Nav = (params) => {
    const activeStyle = {
        display: 'none'
    }
    return <nav>
            <NavLink activeStyle={activeStyle} to={'/search'}>Search</NavLink>
            <NavLink activeStyle={activeStyle} exact  to={'/'}>Home</NavLink>
        </nav>

}

export default Nav