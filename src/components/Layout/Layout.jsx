import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Navbar, PageTitleComponent } from '../'

import "./Layout.scss"

const Layout = ({ pageTitle, children }) => {
    return (
        <Router>
            <Route path="/" render={routeProps => <Navbar {...routeProps} />} />
            <div className="layout__content">
                <PageTitleComponent title={pageTitle} />
                {children}
                <div id="background"></div>
            </div>
        </Router>
    )
}

export default Layout