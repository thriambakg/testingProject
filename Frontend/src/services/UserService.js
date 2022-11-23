import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/user";

class UserService {
    getUser(username, password) {
        return axios.get(USER_API_BASE_URL + '/' + username + '/' +password);
    }
}

export default new UserService()