import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Layout from '../layout'
import Navbar from '../navbar'

class RetroControllerChangelog extends Component {
    componentWillMount() {
		window.scrollTo(0, 0);
	}

    render() {
        return (
            <Layout>
                <Route path="/" render={routeProps => <Navbar {...routeProps} alwaysShow={true} />} />
                <section className="project">
                    <h3>Retro Controller</h3>
                    <h5>Changelog:</h5>
                </section>
            </Layout>
        )
    }
}

export default RetroControllerChangelog;
