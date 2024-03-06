import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



function Register() {

    const initialData = {
        email: '',
        password: ''
    }

    const [regData, setRegData] = useState(initialData);
    const navigate = useNavigate();

    const handelChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value
        });
    }

    const handelClick = (e) => {
        let localuser = JSON.parse(localStorage.getItem("users") || "[]");

        // console.log(localuser);
        // console.log(localuser.length);
        if(localuser.length > 0){
            let data = localuser.filter((element, index) => element.email == regData.email && element.password == regData.password); 
            if(data.length > 0){
                alert('User already exist..');
            }else{
                localuser.push(regData);
                localStorage.setItem("users", JSON.stringify(localuser));
                navigate('/login');
            }
        }else{
            localStorage.setItem("users", JSON.stringify([regData]));   
        }
        
    }

    return (
        <div>
            <h2>Register</h2>
            <input type="email" name="email" onChange={handelChange} />
            <input type="text" name="password" onChange={handelChange} />
            <button type="button" onClick={handelClick}>Register</button>
        </div>
    );
}

export default Register;