import React from 'react'
import Navbar from './navbar'
import { HashRouter as Router, Route } from 'react-router-dom'
var _ = require('lodash');

class Layout extends React.Component {
    render(props){
        return (
            <Router>
                <Route path="/" component={Navbar} />
                {this.props.children}
                <div id="background"></div>
            </Router>
        )
    }
}

export default Layout
