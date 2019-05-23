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
                    {this.props.friends.map((friend, index) => (
                        <div className='friendName'>
                                <h3>{friend.name}</h3>
                                <h3>{friend.age}</h3>
                                <h3>{friend.email}</h3>
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

