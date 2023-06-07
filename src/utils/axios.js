
import axios from  'axios'
import api from './../Constants';
// 
const instance = axios.create({
  baseURL: api
});
  // const instance = axios.create({
  //   baseURL: 'http://localhost:1234/api/v1',
  // });
// instance.defaults.withCredentials = true;
export default instance;