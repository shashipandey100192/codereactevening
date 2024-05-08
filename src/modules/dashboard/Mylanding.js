import React from 'react'
import Mynavbar from './Mynavbar'
import Myhome from './Myhome'
import { Outlet } from 'react-router-dom'

function Mylanding() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 border fixed-top shadow'>
          <Mynavbar />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 border'>
       <Outlet></Outlet>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 border'>
          <h1>footer</h1>
        </div>
      </div>

    </div>
  )
}

export default Mylanding