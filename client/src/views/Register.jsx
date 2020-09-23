import React,{useState} from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link,navigate} from  '@reach/router';


const Register = props => {
    const initialState = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    const [reg,setReg] = useState(initialState);
    const [errors,setErrors] = useState(initialState);


    const handleInputChange = (e) => {
        setReg({
            ...reg,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/register",reg,{withCredentials:true})
            .then(res => {
                if(res.data.msg){
                    setReg(initialState);
                    console.log("Navigating");
                    navigate('/dashboard');
                }
                else{
                    console.log(res.data)
                    setErrors(res.data);
                }
            })
            .catch(err => {
                
            })
    }


    return (
        <form onSubmit={handleSubmit} className="col-5 my-5 mx-auto bg-dark text-light p-4 rounded">
            <h2>Register</h2>
            <Input 
                type="text"
                name="firstName"
                label="First Name:"
                value={reg.firstName}
                placeholder="Ex: Adrien"
                handleChange={handleInputChange}
                error={errors.firstName}
            />
            <Input 
                type="text"
                name="lastName"
                label="Last Name:"
                value={reg.lastName}
                placeholder="Ex: Dion"
                handleChange={handleInputChange}
                error={errors.lastName}
            />
            <Input 
                type="email"
                name="email"
                label="Email:"
                value={reg.email}
                placeholder="Ex: adion@codingdojo.com"
                handleChange={handleInputChange}
                error={errors.email}
            />
            <Input 
                type="password"
                name="password"
                label="Password:"
                value={reg.password}
                handleChange={handleInputChange}
                error={errors.password}
            />
            <Input 
                type="text"
                name="confirmPassword"
                label="Confirm Pasword:"
                value={reg.confirmPassword}
                handleChange={handleInputChange}
                error={errors.confirmPassword}
            />
            <Input 
                type="submit"
                disable={false}
                value="Register"
            />
            <br></br>
            <Link to="/login">Already Signed Up?</Link>

        </form>
    );


}

export default Register;