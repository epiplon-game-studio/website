import React from 'react';

import Projects from '../projects'
import { Layout, Intro, Contact } from '../';

class Welcome extends React.Component {
    render() {
        return (
            <Layout>
                <div id="welcome">
                    <Intro />
                    <div id="content">
                        <Projects></Projects>
                        <Contact></Contact>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Welcome;