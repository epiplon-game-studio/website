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
    // componentDidMount() {
    //     const navbar = document.getElementById('navbar')
    //     // pass alwaysShow={true} to keep the navbar visible
    //     if(this.props.alwaysShow === true)
    //     {
    //         navbar.style.animationName = 'showNavbar'
    //         navbar.style.animationDirection = 'normal'
    //         navbar.style.animationFillMode = 'forwards'
    //     }
    //     else {
    //         document.addEventListener('scroll', e => {
    //             if (window.scrollY > 300) {
    //                 navbar.style.animationName = 'showNavbar'
    //                 navbar.style.animationDirection = 'normal'
    //                 navbar.style.animationFillMode = 'forwards'
    //             }
    //             else {
    //                 if (navbar.style.animationName === 'showNavbar')
    //                     navbar.style.animationName = 'hideNavbar'
    //             }
    //         })
    //     }
    // }

    render() {
        return (
            <nav id="navbar">
                <Link id="navbar-logo" to="/#intro" />
                <ul id="navbar-menu">
                    <li><Link to="/blog">Blog</Link></li>
                    <li>{onLink(this.props, "Projects")}</li> {/*TODO dropdown*/}
                    <li>{onLink(this.props, "About")}</li>
                    <li>{onLink(this.props, "Get In Touch")}</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
