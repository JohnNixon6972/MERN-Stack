import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-jbn.herokuapp.com/',
})

export default instance;