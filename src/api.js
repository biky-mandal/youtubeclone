import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDQYRhcj1Wp10IC6iHlYLNZa9Dq6opsnbY'
    }
})

export default request;