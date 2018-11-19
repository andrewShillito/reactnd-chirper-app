import { saveLikeToggle, saveTweet } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    };
}

export function toggleTweet ({ id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked,
    };
}

export function handleToggleTweet (info) {
    return dispatch => {
        dispatch(toggleTweet(info));
        return saveLikeToggle(info)
            .catch((err) => {
                dispatch(toggleTweet(info));
                console.warn("Error in handleToggleTweet: ", err);
                alert("There was an error liking the tweet. Please try again.");
            });
    };
}

export function addTweet (tweet) {
    return {
        type: ADD_TWEET,
        tweet,
    };
}

export function handleAddTweet (info) {
    return dispatch => {
        return saveTweet(info)
            .then((tweet) => {
                dispatch(addTweet(tweet));
            })
            .catch((err) => {
                console.warn("Error in handling add tweet.", err);
                alert("There was an error adding the tweet.");
            });
    };
}