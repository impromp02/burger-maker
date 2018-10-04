import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-maker-16bcc.firebaseio.com/'
});

export default instance;