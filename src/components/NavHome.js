import React from 'react';
import NavLink from './NavLink';


const NavHome = () => {
    return (
        <nav>
            <NavLink to="overview">Overview</NavLink>
            <NavLink to="setup" >Setup</NavLink>
            <NavLink to="play/">Game Rules</NavLink>

        </nav>
    )
}
export default NavHome;