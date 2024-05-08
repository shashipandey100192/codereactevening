import React from 'react'
import { Link } from 'react-router-dom'

function Mylogin() {
  return (
    <div className='container p-5'>
        <div className='row justify-content-md-center'>
            <div className='col-md-4 bg-light shadow p-5 mt-5'>
                <p className='h3 text-center'>login page</p>
                <hr/>
                <div class="mb-3">
                    <label  class="form-label">UserName</label>
                    <input type="text" class="form-control" placeholder='username'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3">
                    <Link  className='btn btn-success' to="landing">Login</Link>
                    <Link to='registor' className='ms-5'>New User Registor</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Mylogin