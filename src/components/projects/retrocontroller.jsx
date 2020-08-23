import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { Layout, Navbar, PageTitleComponent } from "../";

class RetroController extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Route
          path="/"
          render={(routeProps) => <Navbar {...routeProps} alwaysShow={true} />}
        />
        <PageTitleComponent title={"Retro Character Controller"}></PageTitleComponent>
        <section className="project">
          <div className="flex">
            <div className="left">
              <div className="project-description">
                <p>
                  <strong>Retro Character Controller</strong> is an Asset Pack
                  for the Unity game engine.
                </p>
                <p>
                  You will be able make <strong>first-person</strong> games with
                  character movement that <strong>feels good to play</strong>{" "}
                  and is reminescent from past games like <strong>Quake</strong>{" "}
                  and
                  <strong>Half-Life</strong>.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="video-container">
                <div className="embed-container">
                  <iframe title="retrocontroller" src="https://player.vimeo.com/video/414577245" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
              </div>
              <div className="asset-store">
                <a
                  className="asset-link"
                  href="https://assetstore.unity.com/packages/tools/physics/retro-character-controller-136481"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <object
                    data="assets/asset-store-badge.svg"
                    type="image/svg+xml"
                    width="300px"
                    height="auto"
                  >
                    <img src="" alt="Asset Store Link" />
                  </object>
                </a>
              </div>
              <div className="extra-link">
                <Link to={`/projects/retrocontroller/changelog`}>
                  Changelog
                </Link>
              </div>
              <div className="extra-link">
                <Link to={`/projects/retrocontroller/faq`}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default RetroController;
