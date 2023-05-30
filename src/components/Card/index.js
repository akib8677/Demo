import React, { Fragment } from 'react';

const Card = ({ product }) => {

  return (
    <Fragment>
      <div className='card shadow'>
        <img src={product.imageUrl} className="card-img-top rounded" width={160} height={390} alt="image" />
        <hr />
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p>${product.price}</p>
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </Fragment>
  )
}
export default Card
