import React, { Component} from 'react';
import Header from './Header'

class Layout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;