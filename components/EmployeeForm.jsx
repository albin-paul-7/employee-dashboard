import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted locally!');
    console.log(formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Employee Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required fullWidth />
        <TextField label="Designation" name="designation" value={formData.designation} onChange={handleChange} required fullWidth />
        <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required fullWidth />
        <TextField label="Salary" name="salary" type="number" value={formData.salary} onChange={handleChange} required fullWidth />
        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default EmployeeForm;
