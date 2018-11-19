import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets"

class NewTweet extends Component {
    state = {
        text: '',
    }
    createTweet = () => {
        const { dispatch } = this.props;
        
        // dispatch(handleAddTweet(info))
    }
    updateTextField = () => {}
    render() {
        return (
            <div>
                <h1>New Tweet Component</h1>
                <textarea>
                </textarea>
                <button
                    onClick={this.saveTweet}
                >
                </button>
            </div>
        );
    }
}

function mapStateToProps({authedUser, }) {
    
}

export default connect()(NewTweet);