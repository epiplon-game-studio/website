import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import "./Navbar.scss"

function onLink(props, name) {
    if (props.location.pathname === "/")
        return (
            <Link to={"#" + name.toLowerCase().replace(/ /g, '-')}>{name}</Link>
        )
    else
        return (
            <Link to={"/#" + name.toLowerCase().replace(/ /g, '-')}>{name}</Link>
        )
}

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <Link id="navbar-logo" to="/#intro" />
                <ul id="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li>{onLink(this.props, "Projects")}</li> {/*TODO dropdown*/}
                    <li>{onLink(this.props, "Get In Touch")}</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
