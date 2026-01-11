import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = (newContact) => {
  const req = axios.post(baseUrl, newContact);
  return req.then((res) => res.data);
};

const update = (id, newContact) => {
  const req = axios.put(`${baseUrl}/${id}`, newContact);
  return req.then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};
