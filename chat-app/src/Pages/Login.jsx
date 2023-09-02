import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post('http://localhost:3001/register', {name,email,password}).then(result => console.log(result)).catch(err=>console.log(err))
  };

  return (
    <div className="d-flex  align-items-center vh-100 mx-5 mx-5 ">
      <div className="p-3 rounded container">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="mb-1">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="mb-1">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-sucess w-100 rounded-0">
            Login
          </button>
          <p className="text-center">Don't have an Account</p>
          <Link
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            to="/"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
