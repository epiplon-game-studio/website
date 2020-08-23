import React from 'react';
import { Route } from 'react-router-dom'

import Intro from '../intro'
import Projects from '../projects'
import GetInTouch from '../get-in-touch'
import { Layout } from '..';

class Welcome extends React.Component {
    componentDidMount() {
        const content = document.getElementById("content")
        document.addEventListener('scroll', e => {
            content.style.opacity = window.scrollY / 200
        })
    }

    render() {
        return (
            <Layout>
                <div id="welcome">
                    <Intro />
                    <div id="content">
                        <Projects></Projects>
                        <section id="about">
                            <h2>About Me</h2>
                            <p>My name is <strong>Vinícius Castanheira</strong>, game designer, programmer, artist and a one-man
                                studio
                        in charge of developing projects and games for <strong>Unity</strong>.</p>
                            <p>You can check out my <strong>developed projects above</strong>.</p>
                            <p>If you wanna get in touch, join my <strong>Discord server</strong>. You can also follow me on
                                Twitter,
                        send-me an email regarding any questions or contribute to <strong>open-sourced projects on
                            Github</strong>.</p>
                            <p>I'm also available for hire as <strong>Unity programmer or consultant</strong>.</p>
                            <p></p>
                        </section>
                        <GetInTouch></GetInTouch>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Welcome;