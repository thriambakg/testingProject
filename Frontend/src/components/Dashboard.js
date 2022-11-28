import React from 'react';
import DashboardService from '../services/DashboardService';
import { Link, Navigate, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import App from './App';



class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos:[],
      username: ''
    }
  }
  

  componentDidMount() {
    // console.log(this.props.route.params.username);
    DashboardService.getPhotos().then((Response) => {
      this.setState({photos: Response.data})
    });
    
  }
  


  render () {
    return (
      <div>
        <h1 className="text-center">Photo List</h1>
        <Link className='btn btn-primary' to="/">Logout</Link>
        <Link className='btn btn-primary' to="/addPhoto">Add Photo</Link>
        <Link className='btn btn-primary' to="/search">Search</Link>
        
        


        {/* <input type="file" name="file"></input> */}
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Photo ID</td>
              <td>Photo name</td>
              <td>User name</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.photos.map(
                photo =>
                <tr key = {photo.id}>
                    <td> {photo.id} </td>
                    <td> {photo.photoname} </td>
                    <td> {photo.username} </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard;