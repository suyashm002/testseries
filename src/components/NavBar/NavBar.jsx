import React from "react";
import NavItems from './NavItems';
import NavButtons from './NavButtons';
import './navbar.css';

export default function NavBar() {
    return (
        <nav className="_navbar">
            <NavItems />
            <NavButtons />
        </nav>
    )
}