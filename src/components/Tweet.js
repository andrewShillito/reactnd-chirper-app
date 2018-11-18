import React, { Component } from "react";
import { connect } from "react-redux";


class Tweet extends Component {
    render() {
        console.log("Tweet Props: ", this.props);
        return (
            <li>
                <div>
                    <p>
                        {this.props.id}
                    </p>
                    <p>
                        {this.props.tweets[this.props.id].text}
                    </p>
                </div>
                
            </li>
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
         tweets,
    }
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

export default connect(mapStateToProps)(Tweet)