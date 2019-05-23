import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllUsers extends Component {
    render(){
        return(
            <ul>
                {this.props.reduxState.allUsers.map((user)=>{
                    return(
                        <li>user</li>
                    )
                })}
                {/* <li>users here</li> */}
            </ul>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(AllUsers)