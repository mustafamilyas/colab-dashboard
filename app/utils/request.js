import axios from 'axios';

console.log(process.env)
// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  transformRequest: [
    (data, headers)=>{
      return JSON.stringify(data)
    }, ...axios.defaults.transformRequest
  ]
});

export default service;
