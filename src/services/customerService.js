import axios from 'axios';

const API_URL = 'https://your-backend-api.com/customers';

// Fetch all customers
export const getCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch customer by ID
export const getCustomerById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add a new customer
export const addCustomer = async (customerData) => {
  await axios.post(API_URL, customerData);
};

// Update customer details
export const updateCustomer = async (id, updatedData) => {
  await axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete a customer
export const deleteCustomer = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};