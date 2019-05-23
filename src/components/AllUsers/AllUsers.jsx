import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllUsers extends Component {
    render(){
        return(
            <ul>
                <li>users here</li>
            </ul>
        )
    }
}

export default connect()(AllUsers)