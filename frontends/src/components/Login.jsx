import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'
const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const navigate=useNavigate()
    let updateUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    let sendData=()=>{
    //     if((user.username=="annie")&&(user.password=="123")){
    //         sessionStorage.setItem('username','fathi');
    //         navigate('/Home')
    //     }
    //     else {
    //             alert("invalid password")
    //     }

    // }
         axios.post("http://localhost:3000/api/admin/login",user).then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token",res.data.usertoken);
                navigate('/home')
            }
            
         })
        }
    return (
        <>
            <div className="login-container"> {/* Add this div */}
        <form className="login-form">
            <div variant="h5" style={{color:'white'}}>login</div>
            <TextField
                required
                id="outlined-username"
                label="Username"
                name="username"
                value={user.username}
                onChange={updateUser} 
                variant="outlined"
                color='yellow'
                style={{ marginBottom: '15px', backgroundColor: '#fff' }}
            />
            <br />
            <br />
            <TextField
                required
                id="outlined-password"
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={updateUser} 
                variant="outlined"
            />
            <br />
            <br />
            <Button variant="contained" onClick={sendData} color="primary">
                Submit
            </Button>
        </form>
    </div>
        </>
    );
};

export default Login