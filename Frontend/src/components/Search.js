import React from 'react';
import DashboardService from '../services/DashboardService';
import { Link} from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos:[],
      username: ''
    }
  }
  
  getPhotos = (e) => {
    e.preventDefault();
    DashboardService.searchPhoto(this.state.photoName).then((Response) => {
      console.log("response: " + Response.data);
      if (Response.data !== '') {
        this.setState({photos: Response.data});
      } else {
        alert("no results");
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  
  render () {
    return (
      <div>
        <h1 className="text-center">Photo List</h1>
        <Link className='btn btn-primary' to="/dashboard">Back</Link>
        <input placeholder='Search' name="searchPhoto" className='form-control' value={this.state.photoName} onChange={this.changephotonameHandler}/>
        <button className='btn btn-success' onClick={this.getPhotos}>Search</button>
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

export default Search;