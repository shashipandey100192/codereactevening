import React from 'react'

function Myregistor() {
  return (
    <div className='container p-5'>
        <div className='row justify-content-md-center'>
            <div className='col-md-4 bg-light shadow p-5 mt-5'>
                <p className='h3 text-center'>User Registor Page</p>
                <hr/>
                <div class="mb-3">
                    <label  class="form-label">UserName</label>
                    <input type="text" class="form-control" placeholder='username'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Phone No</label>
                    <input type="text" class="form-control" placeholder='phone no'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Email id</label>
                    <input type="email" class="form-control" placeholder='email'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Gender</label>
                  <select className='form-control'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div class="mb-3">
                    <label  class="form-label">Ceate Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Reenter Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3">
                    <input type='button' className='btn btn-success ms-4' value="submit"/>
                    <input type='reset' className='btn btn-danger ms-5' value="cancel"/>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Myregistor