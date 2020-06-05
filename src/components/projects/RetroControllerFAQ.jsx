import React from "react";
import { Route } from "react-router-dom";

import Layout from "../layout";
import Navbar from "../navbar";

export default function RetroControllerFAQ() {
    return (
        <Layout>
            <Route
                path="/"
                render={(routeProps) => <Navbar {...routeProps} alwaysShow={true} />}
            />
            <section className="faq">
                <h2 style={{ textAlign: "center" }}>Retro Controller FAQ</h2>
                <details className="faq-question">
                    <summary className="faq-question-title">What is the Retro Controller?</summary>
                    <div className="faq-question-content">
                        The Retro Controller is a character controller solution for making first-person games and totally customizable. You can use it with others frameworks like   
                        weapon management, input system, etc.
                    </div>
                </details>
                <details className="faq-question">
                    <summary className="faq-question-title">Can I add weapons?</summary>
                    <div className="faq-question-content">
                        Yes, you can. The pack doesn't have any additional dependencies or constrain for adding other weapon solutions.
                    </div>
                </details>
                <details className="faq-question">
                    <summary className="faq-question-title">Can I make multiplayer games?</summary>
                    <div className="faq-question-content">
                        Yes! While RetroController is flexible enough to add your own networking library, there is a project in development 
                        that shows how to integrate with Photon Bolt and you can <a style={{color: "orange" }} href="https://github.com/epiplon-game-studio/retrocontrolller_photonbolt">get it here</a>.
                    </div>
                </details>
                <details className="faq-question">
                    <summary className="faq-question-title">Can I change the source code?</summary>
                    <div className="faq-question-content">
                        You get access to the full source code to modify according to your needs.
                    </div>
                </details>
            </section>
        </Layout>
    )
}
