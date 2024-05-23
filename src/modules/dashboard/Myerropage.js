import React from 'react'
import { Link } from 'react-router-dom'

function Myerropage() {
  return (
   <div className='container'>
    <div className='row'>
        <div className='col-5 text-center text-danger'>
            <h1>404</h1>
            <h5>Not Found Page</h5>
            <p>Contact to shashi 9871672942 </p>
            <Link to="/" className='btn btn-danger'>Back to Login</Link>
        </div>
    </div>
   </div>
  )
}

export default Myerropage