import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import marked from "marked";

import Layout from "../layout";
import Navbar from "../navbar";

class RetroControllerChangelog extends Component {
  constructor() {
    super()
    this.state = {
      markdown: ''
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const changelogPath = require("./changelogs/retrocontroller_changelog.md");

    fetch(changelogPath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: marked(text),
        });
      });
  }

  render() {
    return (
      <Layout>
        <Route
          path="/"
          render={(routeProps) => <Navbar {...routeProps} alwaysShow={true} />}
        />
        <section className="project">
          <h2 style={{textAlign: "center"}}>Retro Controller Changelog</h2>
          <section className="changelog">
            <article dangerouslySetInnerHTML={{ __html: this.state.markdown }}></article>
          </section>
        </section>
      </Layout>
    );
  }
}

export default RetroControllerChangelog;
