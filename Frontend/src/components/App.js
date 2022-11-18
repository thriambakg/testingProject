import './App.css';
import React, {useState} from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import history from '../history';

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  if(!token) {
    return <Login setToken={setToken} setUser={setUser} />
  }
  //console.log(user);


  //token.then((res) => setUser(res.data));


  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router history={history}>
          
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/signUp" element={<Signup />}>
          </Route>
          <Route>

          </Route>
        
        </Router>
      {/* </BrowserRouter> */}
      <Dashboard />
      <Signup />
    </div>
  );
}

export default App;
