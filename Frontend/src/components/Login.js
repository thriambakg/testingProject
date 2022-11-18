
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';



export default function Login({setToken, setUser}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();



    const handleSubmit = async e => {
        e.preventDefault();
        const token =  axios
        .post('http://localhost:8080/login', {username, password})
        .then((res) => setUser(res.data))
        .catch(err => {
          console.error(err);
        });
       
        setToken(token);

      }

    //let navigate = useNavigate();
    const signUp = () => {
        return <Signup />
    }

  return(
    <div className="login">
      <h1>Please Log In</h1>
      <button className='btn btn-primary' onClick={(signUp)}>Sign Up</button>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }