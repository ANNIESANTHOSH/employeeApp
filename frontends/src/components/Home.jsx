import React, { useState ,useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Link, Grid } from '@mui/material';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  // const user=sessionStorage.getItem('username');
  const [employees,setEmployee] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/employees').then((res)=>{
            setEmployee(res.data)
    })
  },[])
  let deleteEmployee=(p)=>
  {
    axios.delete('http://localhost:3000/api/employees/delete/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
    .catch(()=>{console.log("error")})
  }
     const navigate=useNavigate()
      function updateEmployee(employee){
        navigate('/add',{state:{employee}})
      }
  return (
    <Container sx={{ paddingTop: 5 }} className="employee-container">
  <Typography variant="h4" color="white" gutterBottom>
    Employee List
  </Typography>
  <List>
    {employees.map((employee) => (
      <ListItem
        key={employee.employeeId}
        sx={{
          backgroundColor: '#E6E6FA',
          marginBottom: 2,
          borderRadius: 2,
        }}
      >
        <ListItemAvatar>
          <Avatar alt={employee.employeeId} src={employee.employeeId} />
        </ListItemAvatar>
        <ListItemText
          primary={employee.employeeId}
          secondary={
            <>
            <Typography variant="body2" color="text.secondary">
                Department: {employee.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position: {employee.designation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department: {employee.salary}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department: {employee.department}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department: {employee.location}
              </Typography>
            </>
          }
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => updateEmployee(employee)}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ marginLeft: 2 }}
          onClick={() => deleteEmployee(employee._id)}
        >
          Delete
        </Button>
        {/* <Button
          variant="contained"
          color="info"
          sx={{ marginLeft: 2 }}
          onClick={() => viewDetails(employee)}
        >
          View Details
        </Button> */}
      </ListItem>
    ))}
  </List>
</Container>

  );
}

export default Home;