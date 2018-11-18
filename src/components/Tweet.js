import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers"


class Tweet extends Component {
    render() {
        const { tweet } = this.props;
        
        if (tweet === null) {
            return <p>This Tweet doesn't exist</p>
        }
        
        console.log(this.props);
        
        return (
            <div className="tweet">
            
            </div>
        );
    }
}

function mapStateToProps({authedUser, users, tweets}, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
    
    return {
         authedUser,
         tweet: tweet 
         ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
         : null,
    };
}

// "8xf0y6ziyjabvozdd253nd": {
//     id: "8xf0y6ziyjabvozdd253nd",
//     text: "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
//     author: "sarah_edo",
//     timestamp: 1518122597860,
//     likes: ['tylermcginnis'],
//     replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
//     replyingTo: null,
//   },

export default connect(mapStateToProps)(Tweet);