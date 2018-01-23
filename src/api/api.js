import axios from 'axios';

let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  export const requestLogin = params => { return axios.post(`preview/login/`, params).then(res => res.data); };
  export const getConfigList = params =>{ return axios.get(`preview/config/list/`, params).then(res => res.data); };