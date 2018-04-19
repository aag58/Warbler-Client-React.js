import rootReducers from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";


export function configureStore(){
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}