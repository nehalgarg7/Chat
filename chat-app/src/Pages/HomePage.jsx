import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState("sds");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
    }

    if (password !== confirmpassword) {
    }

    // try {
      // const config = {
      //   headers : {
      //     "Content-type": "application/json",
      //   },
      // };

    //   const { data } = await axios.post(
    //     "/api/user",
    //     {
    //       name,
    //       email,
    //       password,
    //       pic,
    //     },
    //     config
    //   );
    //   console.log(data);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    // }catch (error) {setPicLoading(false);
    // }
    const config = {
      headers : {
        "Content-type": "application/json",
      },
    };
    console.log("Hello");
    axios
      .post("http://localhost:5000/api/user", { name, email, password, pic },config)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

      console.log("Hellodwdew");
  };

  // const postDetails = (pics) => {
  //   setLoading(true);
  //   if(pics === undefined){

  //   }

  //   if(pics.type === "image/jpeg" || pics.type === "image/png"){
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset","chat-app");
  //     data.append("cloud_name","ddlimoalj");
  // fetch("https://api.cloudinary.com/v1_1/ddlimoalj/image/upload",{
  //   method : "post",
  //   body: data,
  // }).then((res) => res.json()).then(data => {
  //       setPic(data.url.toString());
  //       setLoading(false);
  //     }).catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  //   }else{
  //     setLoading(false);
  //   }
  // }

  // const submitImage = () => {
  //   //console.log("begin");
  //   const data = new FormData();
  //   console.log(data);
  //   data.append("file", pic);
  //   data.append("upload_preset","chat-app");
  //   data.append("cloud_name","ddlimoalj");
  //   console.log("begindddddddddddd");
  //   fetch("https://api.cloudinary.com/v1_1/ddlimoalj/image/upload",{
  //       method : "post",
  //       body: data,
  //     }).then((res) => res.json()).then(data => {
  //       console.log(data);
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  // }

  //   const preset_key = "chatapp";
  //   const cloud_name = "ddlimoalj";
  //   const [image, setImage] = useState();

  //   function handleFile(event) {
  //     console.log("triggered");
  //     const file = event.target.files[0];
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append("upload_preset",preset_key);
  //     axios.post('https://api.cloudinary.com/v1_1/ddlimoalj/image/upload').then(res => console.log(res)).catch(err => console.log(err));
  //   }

  return (
    <div className="d-flex  align-items-center vh-100 mx-5 mx-5 ">
      <div className="p-3 rounded container">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="mb-1">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="confirm-password" className="mb-1">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              name="password"
              className="form-control rounded-1"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Picture" className="mb-1">
              <strong>Upload Your Image</strong>
            </label>
            <input
              type="file"
              name="Picture"
              className="form-control rounded-1"
            />
          </div>
          <button type="submit" className="btn btn-sucess w-100 rounded-0">
            Register
          </button>
          <p className="text-center">Already Have an Account</p>
          <Link
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            to="/login"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
