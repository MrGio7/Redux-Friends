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
                    {this.props.friends.map((friend, index) => (
                        <div className='friend'>
                                <h3>Name: {friend.name}</h3>
                                <h3>Age: {friend.age}</h3>
                                <h3>Mail: {friend.email}</h3>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
    friends,
    fetchingData
})

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(Friends)
)

