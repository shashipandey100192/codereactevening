import React from 'react'
import { increment,decrement,myfunc } from './Myactions'
import { useSelector,useDispatch } from 'react-redux'

function Myreduxlandingpage() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <h1>This is Redux page</h1>
          <div>
            <div>
              <button onClick={() => dispatch(increment())}>Increment</button>
              <h1>{count}</h1>
              <button onClick={() => dispatch(decrement())}>Decrement</button>
              <button onClick={() => dispatch(myfunc())}>mycus</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myreduxlandingpage