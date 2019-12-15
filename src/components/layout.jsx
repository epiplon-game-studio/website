import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
var _ = require('lodash');

class Layout extends React.Component {
    render(props){
        return (
            <Router>
                {this.props.children}
                <div id="background"></div>
            </Router>
        )
    }
}

export default Layout
