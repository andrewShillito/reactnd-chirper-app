import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser"

function selectAuthedId () {
    const users = ["sarah_edo", "tylermcginnis", "dan_abramov"];
    return users[Math.floor(Math.random()*3)];
}

const AUTHED_ID = selectAuthedId();

export function handleInitialData () {
    return dispatch => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
            });
    };
}