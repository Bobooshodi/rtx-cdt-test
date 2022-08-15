import axios from 'axios';

const basePath = '/api';

export const getResource = async (path, params = {}) => {
  const res = await axios.get(`${basePath}${path}`, { params });

  return res.data;
};

export const postResource = async (path, data) => {
  const res = await axios.post(`${basePath}${path}`, data);

  return res.data;
};

export const putResource = async (path, data) => {
  const res = await axios.put(`${basePath}${path}`, data);

  return res.data;
};

export const deleteResource = async (path) => {
  const res = await axios.delete(`${basePath}${path}`);

  return res.data;
};
