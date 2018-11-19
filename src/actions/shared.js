import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser"
import { showLoading, hideLoading } from "react-redux-loading";

function selectAuthedId () {
    const users = ["sarah_edo", "tylermcginnis", "dan_abramov"];
    return users[Math.floor(Math.random()*3)];
}

const AUTHED_ID = selectAuthedId();

export function handleInitialData () {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            });
    };
}

