import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const initialdata = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialdata);

    const navigate = useNavigate();

    const handelChange = (e) => {
        /*console.log(e);
        console.log(e.target.name);*/
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handelClick = (e) => {
        let localuser = JSON.parse(localStorage.getItem("users") || "[]");
        if(localuser.length > 0){
            let data = localuser.filter((element, index) => element.email == formData.email && element.password == formData.password); 
            if(data.length > 0){
                navigate('/todo');
            }else{
                alert('User not found..'); 
            }
        }else{
            alert('User not found..');  
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="email" name="email" value={formData.email} onChange={handelChange} />
            <input type="password" name="password" value={formData.password} onChange={handelChange} />
            <button type="button" onClick={handelClick}>Login</button>
        </div>
    );
}

export default Login;
