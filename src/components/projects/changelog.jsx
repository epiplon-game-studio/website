import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import Layout from '../layout'
import Navbar from '../navbar'

class Changelog extends Component {
    componentWillMount() {
		window.scrollTo(0, 0);
	}

    render() {
        return (
            <Layout>
                <Route path="/" render={routeProps => <Navbar {...routeProps} alwaysShow={true} />} />
                <h1>Retro Controller</h1>
                <h3>Changelog:</h3>
            </Layout>
        )
    }
}

export default Changelog;