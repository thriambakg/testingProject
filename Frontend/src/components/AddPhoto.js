import { Component } from "react";
import { Link } from "react-router-dom";
import AddPhotoService from "../services/AddPhotoService";

class AddPhoto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photoname: '',
            username: props.username,
            photo: null
        }

        this.changePhotonameHandler = this.changePhotonameHandler.bind(this);
        this.changePhotoHandler = this.changePhotoHandler.bind(this);
    }


    changePhotonameHandler = (event) => {
        this.setState({photoname: event.target.value});
    }

    changePhotoHandler = (event) => {
        this.setState({ photo: event.target.files[0] });
    }

    uploadPhoto = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('image', this.state.photo, this.state.photo.name);
        let newPhoto = {photoname: this.state.photoname, username: 'user', photo: fd};
        AddPhotoService.createPhoto(newPhoto).then(res => {
            console.log(res);
            alert("added new photo");
        });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Photo</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Photo name: </label>
                                        <input placeholder='Photo name' name="photoname" className='form-control'
                                            value={this.state.photoname} onChange={this.changePhotonameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Photo: </label>
                                        <input placeholder='File' type="file" name="photo" className='form-control'
                                            value={this.state.password} onChange={this.changePhotoHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.uploadPhoto}>Save</button>
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

export default AddPhoto;