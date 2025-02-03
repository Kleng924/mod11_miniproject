import React, { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from '../../services/customerService';
import { Button, Table } from 'react-bootstrap';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  return (
    <div>
      <h2>Customers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <Button variant="warning" href={`/customers/${customer.id}`}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;