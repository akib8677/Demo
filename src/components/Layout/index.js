import React, { Fragment, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart, HiUser, HiLogout } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { logout , reset} from '../../features/auth/authSlice';

const Layout = () => {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate('/auth/login')
    }
  }, [ user, navigate])
  

  const logoutUser = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-md-1'>
                <a className='font-weight-bolder text-white text-decoration-none h4' href="#">Goal</a>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='row w-100'>
                <div className='col-sm-3'></div>
                <div className='col-sm-7'>
                  <div style={{ justifyContent: 'end', width: '60%' }}>
                    <form className='d-flex'>
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
                <div className='col-sm-2'>
                  <div className='d-flex'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/"} >Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/about"} >About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link active " to={"/cart"}>< HiOutlineShoppingCart />Cart</NavLink>
                      </li>
                      <li>
                          {
                            user ? (
                              <button type="button" className="btn btn-success" onClick={logoutUser}><HiLogout />Logout</button>
                            ) : (
                              <NavLink className="nav-link active " to={"/auth/login"}> <HiUser />Login</NavLink>
                            )
                          }
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="main-content my-2">
          <Outlet />
        </div>
      </div>
      <footer className="bg-primary">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold text-white mb-4">About</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-white" >Contact Us</a></li>
                <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white">Stories</a></li>
                <li className="mb-2"><a href="#" className="text-white">Press</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold text-white mb-4">Help</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-white">Payments</a></li>
                <li className="mb-2"><a href="#" className="text-white">Shipping</a></li>
                <li className="mb-2"><a href="#" className="text-white">Cancellation</a></li>
                <li className="mb-2"><a href="#" className="text-white">Returns</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold text-white mb-4">Policy</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-white">Return Policy</a></li>
                <li className="mb-2"><a href="#" className="text-white">Terms Of Use</a></li>
                <li className="mb-2"><a href="#" className="text-white">Security</a></li>
                <li className="mb-2"><a href="#" className="text-white">Privacy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold text-white mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-white">Login</a></li>
                <li className="mb-2"><a href="#" className="text-white">Register</a></li>
                <li className="mb-2"><a href="#" className="text-white">Sitemap</a></li>
                <li className="mb-2"><a href="#" className="text-white">Our Products</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase text-white font-weight-bold mb-4">Registered Office Address</h6>
            </div>
          </div>
        </div>
        <hr className=" text-white p-0 m-0 b-0" />
        <div className="bg-primary py-2">
          <div className="container text-center">
            <p className="text-white mb-0 py-2">&copy; 2019 BBBootstrap All risghts reserved.</p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Layout
