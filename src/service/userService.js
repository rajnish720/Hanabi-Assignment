import axios from 'axios'

const API_URL = "http://localhost:3001";


class UserService{

    saveUser(user){

        return axios.post(API_URL + "/save-user", user);
    }

    getUserDetails(email){

        return axios.post(API_URL + "/get-user", email);
    }



}

export default new UserService;