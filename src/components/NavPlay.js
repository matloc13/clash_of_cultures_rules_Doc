import React from 'react';
import NavLink from './NavLink';
const NavPlay = () => {
    return (
        <nav>
            <NavLink to="round">Round</NavLink>
            <NavLink to="combat">Combat</NavLink>
            <NavLink to="actions">Actions</NavLink>
            <NavLink to="status">Status Phase</NavLink>
            <NavLink to="cards">Card Effects</NavLink>
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}
export default NavPlay;