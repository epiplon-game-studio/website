import React from 'react'

import "./Intro.scss"

function Intro() {
    return (
        <section className="intro">
            <div className="intro__logo"></div>
            <div className="intro__content">
                <p>Hi, my name is <strong>Vinícius Castanheira</strong>.</p>
                <p>I'm a <strong>Programmer</strong>, <strong>Artist</strong> and <strong>Game Developer</strong>.</p>
            </div>
        </section>
    )
}

export default Intro;
