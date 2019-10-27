import React from 'react';
import { Router } from '@reach/router';
import NavHome from './NavHome';
import NavPlay from './NavPlay';

const Header = () => {
    return (
        <header className="header">
            <Router>
                <NavHome path="/*" />
                <NavPlay path="play/*" />
            </Router>
        </header>
    )
}
export default Header;