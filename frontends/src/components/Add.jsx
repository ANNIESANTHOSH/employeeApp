import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Addemployee = () => {
  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    designation: "",
    salary: "",
    department: "",
    location: ""
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!employee.employeeId.trim()) newErrors.employeeId = "Employee ID is required.";
    if (!employee.name.trim()) newErrors.name = "Employee name is required.";
    if (!employee.designation.trim()) newErrors.designation = "Designation is required.";
    if (!employee.salary.trim() || isNaN(employee.salary) || Number(employee.salary) <= 0) {
      newErrors.salary = "Salary must be a positive number.";
    }
    if (!employee.department.trim()) newErrors.department = "Department is required.";
    if (!employee.location.trim()) newErrors.location = "Location is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendData(); // Only call sendData if validation passes
    }
  };

  const sendData = () => {
    if (location.state != null) {
      axios.put('http://localhost:3000/api/employees/edit/' + location.state.employee._id, employee)
        .then((res) => {
          alert('Data updated');
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:3000/api/employees/Addemployee/', employee)
        .then((res) => {
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (location.state != null) {
      setEmployee({
        employeeId: location.state.employee.employeeId,
        name: location.state.employee.name,
        designation: location.state.employee.designation,
        salary: location.state.employee.salary,
        department: location.state.employee.department,
        location: location.state.employee.location
      });
    }
  }, [location.state]);

  return (
    <Container sx={{ paddingTop: 3, background: 'white' }} className="add">
      <Typography variant="h4" className="add-title" color="blueviolet">
        Edit Employee Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="employeeId"
          label="Employee ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={employee.employeeId}
          onChange={handleChange}
          error={!!errors.employeeId}
          helperText={errors.employeeId}
        />
        <TextField
          name="name"
          label="Employee Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={employee.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="designation"
          label="Employee Designation"
          variant="outlined"
          fullWidth
          margin="normal"
          value={employee.designation}
          onChange={handleChange}
          error={!!errors.designation}
          helperText={errors.designation}
        />
        <TextField
          name="salary"
          label="Employee Salary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={employee.salary}
          onChange={handleChange}
          error={!!errors.salary}
          helperText={errors.salary}
        />
        <TextField
          name="department"
          label="Employee Department"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={employee.department}
          onChange={handleChange}
          error={!!errors.department}
          helperText={errors.department}
        />
        <TextField
          name="location"
          label="Employee Location"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={employee.location}
          onChange={handleChange}
          error={!!errors.location}
          helperText={errors.location}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="add-button"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Addemployee;
