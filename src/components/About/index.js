import React, { Fragment, useEffect, useState } from 'react'
import Card from '../Card';
import { getProduct } from '../services/product';
import Loader from '../shared/loader';

function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      if (data) {
        setProducts(data);
      }
    })
  }, []);

  return (
    <>
      <div className='container shadow'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="images/product1.jpg" className="d-block w-100 img-fluid" style={{ height: '300px' }} alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="images/product2.jpg" className="d-block w-100 img-fluid" style={{ height: '300px' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/product3.jpg" className="d-block w-100 img-fluid" style={{ height: '300px' }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container my-2'>
        <div className="row">
          {
            products.length === 0 ? (<Loader />) :
              (
                products.map((product, i) => {
                  return (<div className='col-md-4' key={i}>
                    <Card product={product} />
                  </div>)
                })
              )
          }
        </div>
      </div>
    </>
  )
}

export default About;