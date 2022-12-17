import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import style from './Signup.module.css';

var obj = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: "" 
}
export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isAuth } = useContext(AuthContext);
  const [useData, setUserData] = useState(obj);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }


  
  const handleChange = (e) => {
   
    const { value, name } = e.target

    setUserData({...useData, [name]:value});
    
  }

  const handleSubmit = (e) => {
    // console.log(useData)
    e.preventDefault();
    setLoading(true);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: 'POST',
      body: JSON.stringify(useData),
      headers: {
        'Content-type':'application/json'
      }

    }).then(res => {
      console.log(res, "res at line 39");
       setLoading(false)

    }).catch((err) => {
      console.log(err,"error at line no 43");

      setLoading(false);
      setError(true);
    })
  }

  if (loading) {
   return <img src="https://miro.medium.com/max/1280/1*Tq6CuI_IJ0kX8D2tToUeTQ.gif" alt="" />
  }

  if (error) {
    return <div>
      <h1>Sign In Failed.... Please Try Again</h1>
    </div>
  }
  return (
    <div className={style.formdiv}>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>

        <label htmlFor="">Enter Full Name</label>
      <input name="name" onChange={handleChange} type="text" placeholder='Enter full Name' />
      <label htmlFor="">Enter Username</label>
      <input name="username" onChange={handleChange} type="text" placeholder='Enter Username' />
      <label htmlFor="">Enter Email</label>
      <input name="email" onChange={handleChange} type="email" placeholder='Enter Email'/>
      <label for="">Enter Password</label>
      <input name="password" onChange={handleChange} type="password" placeholder='Enter Password' />
      <label htmlFor="">Enter mobile Number</label>
      <input name="mobile" onChange={handleChange} type="number" placeholder='Enter Mobile Number' />
      <label for="">Enter Description</label>
      <input name="description" onChange={handleChange} type="text" placeholder='Enter Description' />
        <input type="submit" value="Signup" />
        <h3>Already have an account ? <Link to="/login">Login</Link> </h3>
        
      </form>
    </div>
  )
}
