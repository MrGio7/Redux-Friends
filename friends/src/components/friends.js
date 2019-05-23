import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render(){
        return(
            <div className='friends'>
                <h2>Friend List</h2>
            </div>
        )
    }
}

export default withRouter(
    connect(
        null,
        { getData }
    )(Friends)
)

