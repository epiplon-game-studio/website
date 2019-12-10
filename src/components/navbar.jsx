import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function onLink(props, name) {
    if (props.location.pathname === "/")
        return (
            <Link to={"#"+name.toLowerCase().replace(/ /g, '-')}>{name}</Link>
        )
    else
        return (
            <Link to="/">{name}</Link>
        )
}

class Navbar extends React.Component {
    componentDidMount() {
        const navbar = document.getElementById('navbar')
        document.addEventListener('scroll', e => {
            if (window.scrollY > 300) {
                navbar.style.animationName = 'showNavbar'
                navbar.style.animationDirection = 'normal'
                navbar.style.animationFillMode = 'forwards'
            }
            else {
                if (navbar.style.animationName === 'showNavbar')
                    navbar.style.animationName = 'hideNavbar'
            }
        })
    }

    render() {
        return (
            <div>
                <nav id="navbar">
                    <div id="navbar-logo"></div>
                    <ul id="navbar-menu">
                        <li>{onLink(this.props, "Projects")}</li> {/*TODO dropdown*/}
                        <li>{onLink(this.props, "About")}</li>
                        <li>{onLink(this.props, "Get In Touch")}</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
