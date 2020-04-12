import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Welcome from "./components/welcome";
import RetroController from "./components/projects/retrocontroller";
import RetroControllerChangelog from "./components/projects/RetroControllerChangelog"

function App() {
    return (
        <Router>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/projects/retrocontroller" component={RetroController} />
            <Route exact path="/projects/retrocontroller/changelog" component={RetroControllerChangelog} />
        </Router>
    )
}

export default App
