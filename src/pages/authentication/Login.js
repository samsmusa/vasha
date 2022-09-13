import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { Link, useLocation, useNavigate } from "react-router-dom";

import {  toast } from 'react-toastify';
import useAuthState from "../../components/useAuthState";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user, error, loading} = useAuthState()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (user) {
    let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  
  // const [error, setError] = React.useState(false)
  const onSubmit = data => {
    axios.post(
      'http://127.0.0.1:8000/auth/login/',
      data
    )
    .then(res=>{
      localStorage.setItem("access_token", res.data.tokens.access);
      localStorage.setItem("refresh_token", res.data.tokens.refresh);
      window.location.reload(false);
    })
    .catch(res=>{
      if (res.response.status === 401){
        // setError(true)
        toast.error("username or password invalid")
      }

    })
    
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="md:w-1/2 md:max-w-sm card flex-shrink-0  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  placeholder="username"
                  className={` input input-bordered ${
                    (errors.username || error) && "border-red-500"
                  }`}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className={` input input-bordered ${
                    (errors.username || error) && "border-red-500"
                  }`}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
