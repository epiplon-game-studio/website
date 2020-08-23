import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { Welcome } from "./components";
import { BlogContainer } from "./containers"
import RetroController from "./components/projects/retrocontroller";
import RetroControllerChangelog from "./components/projects/RetroControllerChangelog"
import RetroControllerFAQ from "./components/projects/RetroControllerFAQ"

function App() {
    return (
        <Router>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/blog" component={BlogContainer} />
            <Route exact path="/blog/:id" component={BlogContainer} />
            <Route exact path="/projects/retrocontroller" component={RetroController} />
            <Route exact path="/projects/retrocontroller/changelog" component={RetroControllerChangelog} />
            <Route exact path="/projects/retrocontroller/faq" component={RetroControllerFAQ} />
        </Router>
    )
}

export default App
