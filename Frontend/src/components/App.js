import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AddPhoto from './AddPhoto';

export default function App() {
  // const [token, setToken] = useState();
  // const [user, setUser] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} setUser={setUser} />
  // }
  //console.log(user);


  //token.then((res) => setUser(res.data));


  return (
      <BrowserRouter>
        <Routes>       
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/signUp" element={<Signup />}>
          </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/addPhoto" element={<AddPhoto />}>
        </Route>
        
    </Routes>   
      </BrowserRouter>
  );
}