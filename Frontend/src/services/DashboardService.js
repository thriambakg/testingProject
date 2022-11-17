import axios from 'axios'

const PHOTOS_REST_API_URL = 'http://localhost:8080/api/photos';

class PhotoService {

    getPhotos() {
        return axios.get(PHOTOS_REST_API_URL);
    }
}

export default new PhotoService();