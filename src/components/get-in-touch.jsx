import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faDiscord, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, } from '@fortawesome/free-solid-svg-icons'

export default function GetInTouch() {
    return (
        <div>
            <section id="get-in-touch">
                <h2>Get in Touch</h2>
                <div id="contact-list">
                    <div className="contact-icon">
                        <a href="https://twitter.com/viniciusepiplon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://discord.gg/jeBQe7C" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="mailto:&#101;&#112;&#105;&#112;&#108;&#111;&#110;&#115;&#116;&#117;&#100;&#105;&#111;&#064;&#112;&#109;&#046;&#109;&#101;"
                            target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://github.com/vncastanheira" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
