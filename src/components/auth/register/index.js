import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { reset, register } from '../../../features/auth/authSlice';
import Loader from '../../shared/loader/index';

function Register() {
  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, user, navigate, dispatch])

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData((previousData) => ({
      ...previousData,
      [e.target.name]: e.target.value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password
    }
    dispatch(register(userData))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <form className='form-container'>
        <div className='mb-3 text-center'>
          <h1>Register</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn btn-primary w-100" onClick={handleRegister}>Create Account</button>
        </div>
        <div className='d-flex justify-content-center'>
          <NavLink className="nav-link active" aria-current="page" to={"/auth/login"} >Already have an account? Login </NavLink>
        </div>
      </form>
    </>
  )
}

export default Register;