import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

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
        default :
            return state;
    }  
}
