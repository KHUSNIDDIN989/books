import axios from "axios";
const getApi = (r) => {
  return axios.get(`http://localhost:9009/${r}/`);
};

const postApi = (r, obj) => {
  return axios.post(`http://localhost:9009/${r}`, obj);
};

const putApi = (r, obj) => {
  return axios.put(`http://localhost:9009/${r}`, obj);
};

const deleteApi = (r) => {
  return axios.delete(`http://localhost:9009/${r}`);
};
export { getApi, postApi, putApi, deleteApi };
