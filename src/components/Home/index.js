import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGoal, reset, getGoals } from '../../features/goal/goalSlice';
import Loader from '../shared/loader';
import Modal from '../shared/modal';
import { toast } from 'react-toastify';

const Home = () => {
  const { user } = useSelector(state => state.auth)
  const { isSuccess, isLoading, isError, goal, message } = useSelector(state => state.goal)
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [isError, dispatch, message]);

  const createGoals = () => {
    dispatch(createGoal({ text }))
    setText('')
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <Fragment>
      <div className="card ">
        <div className="card-header text-center">
          Welcome
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{user && user.name}</h5>
        </div>
        <div className='form-card'>
          <p className="card-text h6">Goal</p>
          <input type="text" className="form-control" id='text' name='text' value={text} onChange={(e) => setText(e.target.value)}></input>
          <button type="button" className="btn btn-primary my-2 w-100" onClick={createGoals}>Create Goal</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
