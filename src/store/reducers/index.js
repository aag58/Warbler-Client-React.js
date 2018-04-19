import {combineReducers} from "redux";
import currentUser from './currentUser.js';
import errors from './errors.js';
import messages from './messages.js';


const rootReducers = combineReducers({
    currentUser,
    errors,
    messages

})

export default rootReducers;