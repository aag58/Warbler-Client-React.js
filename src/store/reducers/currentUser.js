import {SET_CURRENT_USER} from '../actionTypes.js';

const DEFAULT_STATE = {
    isAuthenticated : false, // true when user is logged in
    user: {} // all the user info when logged in
}

export default (state= DEFAULT_STATE, action) => {
    switch (action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0,
                user: action.user
            };
        default:
            return state;
             
    }
}