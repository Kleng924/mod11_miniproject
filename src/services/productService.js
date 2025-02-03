import axios from 'axios';

const API_URL = 'https://your-backend-api.com/products';

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addProduct = async (productData) => {
  await axios.post(API_URL, productData);
};

export const updateProduct = async (id, updatedData) => {
  await axios.put(`${API_URL}/${id}`, updatedData);
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};