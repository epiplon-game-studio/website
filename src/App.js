import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Welcome from "./components/welcome";
import RetroController from "./components/projects/retrocontroller";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/projects/retrocontroller" component={RetroController} />
        </Router>
    )
}

export default App
