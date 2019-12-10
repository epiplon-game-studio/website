import React from 'react'
import Navbar from './navbar'
var _ = require('lodash');

class Layout extends React.Component {
    componentDidMount() {
        const navbar = document.getElementById('navbar')
        document.addEventListener('scroll', e => {
            if(window.scrollY > 300)
            {
                navbar.style.animationName = 'showNavbar'
                navbar.style.animationDirection = 'normal'
                navbar.style.animationFillMode = 'forwards'
            }
            else
            {
                if(navbar.style.animationName === 'showNavbar')
                    navbar.style.animationName = 'hideNavbar'
            }
        })
    }

    render(props){
        return (
            <div>
                <Navbar></Navbar>
                {this.props.children}
                <div id="background"></div>
            </div>
        )
    }
}

export default Layout
