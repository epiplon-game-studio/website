import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

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
