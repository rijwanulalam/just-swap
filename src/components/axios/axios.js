import axios from 'axios';

const instance = axios.create({
    baseURL: "https://just-swap.herokuapp.com"
})

export default instance;