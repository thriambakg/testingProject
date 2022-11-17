import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

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
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user}/>}>
          </Route>
          <Route path="/other" element={<h1>hello</h1>}>
            
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
