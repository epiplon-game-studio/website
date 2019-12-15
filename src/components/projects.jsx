import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

function Projects() {
    return (
        <Router>
            <section id="projects">
                    <h2>Projects</h2>
                    <div id="project-list">
                        <div className="project-entry">
                            <Link to={`/projects/retrocontroller`}>
                                <div className="project-image">
                                    <img src="./assets/retro_controller.png" alt="Retro Controller"></img>
                                </div>
                            </Link>
                        </div>
                        <div className="project-entry">
                            <div>
                                <div className="project-image">
                                    <img src="./assets/coming.jpg" alt="Coming"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Router>
    )
}

export default Projects
