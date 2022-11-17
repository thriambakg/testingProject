import React from 'react';
import DashboardService from '../services/DashboardService';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos:[]
    }
  }

  componentDidMount() {
    DashboardService.getPhotos().then((Response) => {
      this.setState({photos: Response.data})
    });
  }

  render () {
    return (
      <div>
        <h1 className="text-center">Photo List</h1>
        <input type="file" name="file"></input>
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

export default Dashboard

// export default function Dashboard({user}) {
//   if(user===undefined){
//     return(<h2>shucks</h2>);
//   }
//   else{
//   return(
//     <h2>{user.token}</h2>
//   );
// }
// }