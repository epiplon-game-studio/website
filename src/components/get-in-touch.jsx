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
                            {/* <i className="fab fa-twitter-square"></i> */}
                            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://discord.gg/jeBQe7C" target="_blank" rel="noopener noreferrer">
                            {/* <i className="fab fa-discord"></i> */}
                            <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="mailto:&#118;&#110;&#099;&#097;&#115;&#116;&#097;&#110;&#104;&#101;&#105;&#114;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                            target="_blank" rel="noopener noreferrer">
                            {/* <i className="fas fa-envelope-square"></i> */}
                            <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://github.com/vncastanheira" target="_blank" rel="noopener noreferrer">
                            {/* <i className="fab fa-github-square"></i> */}
                            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
