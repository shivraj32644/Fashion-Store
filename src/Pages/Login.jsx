import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import style from "./Login.module.css";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [navi, setNavi] = useState(false);
  const { isAuth, login } = useContext(AuthContext);
  
  const navigate = useNavigate();
  if (isAuth) {
     navigate('/')
  }
  var obj = {
    password: "",
    username: "",
  };
  const [loginData, setLoginData] = useState(obj);
  function handleChange(e) {
    var { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }
  
  
  console.log(loginData);
  
  function handleSubmit(e) {
    e.preventDefault();
    setNavi(false);
    setLoading(true);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        console.log(res);
        localStorage.setItem("isLogin", true);
        login();
        setTimeout(() => {
          navigate('/')
        },300)
        setNavi(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        setNavi(false);
      });
  }

  if (loading) {
    return (
      <img
        src="https://miro.medium.com/max/1280/1*Tq6CuI_IJ0kX8D2tToUeTQ.gif"
        alt=""
      />
    );
  }

  if (error) {
    return (
      <div className={style.failed}>
        <h1>Log In Failed.... Please Try Again</h1>
      </div>
    );
  }

  
  return (
    <div className={style.formdiv}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>


        <label for="">Enter Username</label>
        <input
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="Enter Username"
        />




        <label for="">Enter password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
