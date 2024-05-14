import React from 'react'
import { Outlet } from 'react-router-dom'
import Mysidebar from './Mysidebar'


function Myservicedashboard() {
    return (
        <div className='container-fluid cusmt'>
            <div className='row'>
                <div className='col'>Service Page</div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='border'>
                      <Mysidebar/>
                    </div>
                </div>
                <div className='col-md-10'>
                    <div className="border">
                    <Outlet />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Myservicedashboard