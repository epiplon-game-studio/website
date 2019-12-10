import React from 'react'

function Navbar() {
    return (
        <nav id="navbar">
            <div id="navbar-logo"></div>
            <ul id="navbar-menu">
                <li>Projects</li> {/*TODO dropdown*/}
                <li>About</li>
                <li>Get in Touch</li>
            </ul>
        </nav>
    )
}

export default Navbar
