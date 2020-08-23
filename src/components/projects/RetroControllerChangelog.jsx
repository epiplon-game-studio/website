import React, { Component } from "react";
import { Route } from "react-router-dom";
import marked from "marked";

import { Layout } from "../";

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
      <Layout pageTitle="Retro Controller Changelog">
        <section className="project">
          <section className="changelog">
            <article dangerouslySetInnerHTML={{ __html: this.state.markdown }}></article>
          </section>
        </section>
      </Layout>
    );
  }
}

export default RetroControllerChangelog;
