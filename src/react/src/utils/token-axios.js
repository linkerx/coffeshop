import axios from 'axios';

export default function tokenAxios() {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 7000;
  return axios
}
