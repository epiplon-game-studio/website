import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

const Layout = ({ children }) => (
    <Router>
        {children}
        <div id="background"></div>
    </Router>
)

export default Layout