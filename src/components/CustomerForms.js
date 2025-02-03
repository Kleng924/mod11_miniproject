import React, { useState, useEffect } from 'react';
import { addCustomer, updateCustomer, getCustomerById } from '../../services/customerService';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const CustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (id) {
      fetchCustomer();
    }
  }, [id]);

  const fetchCustomer = async () => {
    const data = await getCustomerById(id);
    setCustomer(data);
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCustomer(id, customer);
    } else {
      await addCustomer(customer);
    }
    navigate('/customers');
  };

  return (
    <div>
      <h2>{id ? 'Edit Customer' : 'Add Customer'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={customer.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={customer.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={customer.phone} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit">{id ? 'Update' : 'Add'} Customer</Button>
      </Form>
    </div>
  );
};

export default CustomerForm;