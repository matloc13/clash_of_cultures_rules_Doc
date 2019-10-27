import React from 'react';
import NavLink from './NavLink';

const NavHome = () => {
    return (

        <nav className="nav">

            <NavLink to="overview">Overview</NavLink>
            <NavLink to="setup" >Setup</NavLink>
            <NavLink to="advance">Advances</NavLink>
            <NavLink to="culture">Culture</NavLink>
            <NavLink to="play/">Game Rules</NavLink>

        </nav>
    )
}
export default NavHome;