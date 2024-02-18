import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyCU9346Ovzzi6tLjqxedtyQnlB48LvQO-Y'
    }
})

export default request;