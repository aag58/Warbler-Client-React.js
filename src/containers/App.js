import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import {setAuthorizationToken, setCurrentUser} from '../store/actions/auth'
import jwtDecode from 'jwt-decode';

const store = configureStore();


// Whenever page refreshes check if there is jwtToken in local storage....
// if it is present then we setAuthorizationToken(localStorage.jwtToken) 
// so that previous (before refresh) logged in user  can continue
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tampering with key of jwtToken
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch (e) {
    store.dispatch(setCurrentUser({}))
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onBoarding">
        <NavBar/>
        <Main/>
      </div>
    </Router>
    
  </Provider>
)

export default App;
