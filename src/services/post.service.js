import axios from 'axios';

const config =  {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {}
}

const axiosInstance = axios.create(config);


const getPosts = () => {
    return axiosInstance.get('').then(value => value.data);
}

const getPost = (id) => {
    return axiosInstance.get(`/${id}`).then(value => value.data);
}

export {getPosts, getPost}