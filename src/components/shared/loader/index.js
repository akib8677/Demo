import React from 'react'

const Loader = () => {
  return (
    <button className="btn btn-primary my-2" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Cart...
    </button>)
}

export default Loader