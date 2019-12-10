import React from 'react'

class Layout extends React.Component {
    render(props){
        return (
            <div>
                <div id="background"></div>
                <div id="gradient"></div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout
