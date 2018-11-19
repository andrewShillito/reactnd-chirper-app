import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,
                ...action.tweets
            };
        case TOGGLE_TWEET :
            const newTweet = {...state[action.id]};
            action.hasLiked 
                ? newTweet.likes = newTweet.likes.filter((uid) => uid !== action.authedUser)
                : newTweet.likes.push(action.authedUser);
            return {
                ...state,
                [action.id]: newTweet
            };
        case ADD_TWEET :
            const { tweet } = action;
            let replyingTo = {};
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat(tweet.id)
                    }
                };
            }
            
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,
            };
        default :
            return state;
    }  
}
