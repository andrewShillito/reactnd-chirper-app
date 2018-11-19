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
            return {
                ...state,
                [action.tweet.id]: action.tweet,
            };
        default :
            return state;
    }  
}
