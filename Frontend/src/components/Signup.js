import React, { Component } from 'react'
import SignupService from '../services/SignupService';
import { Link, useNavigate } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    //save entered user info
    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log(user);

        SignupService.createUser(user).then(res => {
            console.log(res);
            alert("Created user: " + this.state.username);
        });
    }

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add User</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Username: </label>
                                        <input placeholder='Username' name="username" className='form-control'
                                            value={this.state.username} onChange={this.changeUsernameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password: </label>
                                        <input placeholder='Password' type="password" name="password" className='form-control'
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveUser}>Save</button>
                                    <Link className='btn btn-primary' to="/">Back</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;