import React, { useState, useEffect } from 'react';
import { } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { reset, login } from '../../../features/auth/authSlice';
import Loader from '../../shared/loader/index';

function Login() {
  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, user, navigate, dispatch])

  const handleChange = (e) => {
    setFormData((previousData) => ({
      ...previousData,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if(isLoading){
    return <Loader/>
  }
  return (
    <>
      <form className='form-container'>
        <div className='mb-3 text-center'>
          <h1>Login</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
        </div>
        <div className='d-flex justify-content-center'>
          <NavLink className="nav-link active" aria-current="page" to={"/auth/register"} >You don't have an account? Register </NavLink>
        </div>
      </form>
    </>
  )
}

export default Login;