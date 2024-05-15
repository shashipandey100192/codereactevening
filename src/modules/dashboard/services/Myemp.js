import React, { useState } from 'react'
import Mycard from '../Mycard'


function Myemp() {
    const [design,changedesign]=useState("red")

const myfunc = (abc)=>{
    console.log(abc);
    changedesign(abc.target.value)
}

        if(design==="red")
            {
                return (
                    <div className='container-fluid cusmt bg-danger'>
                     <div className='row'>
                         <div className='col-6'>Emp Service Page </div>
                         <div className='col-6'>
                         <select className='form-control' onChange={myfunc}>
                                <option>red</option>
                                <option>yellow</option>
                                <option>others</option>
                            </select>
                         </div>
                     </div>
                     <div className='row'>
                        <div className='col-md-12'>
                        <h1>This is Container page </h1>
                        <div className='container'>
                            <div className='row'>
                        <Mycard/>
                        <Mycard/>
                        <Mycard/>
                        <Mycard/>
                        <Mycard/>
                        <Mycard/>
                        </div>
                        </div>
                        </div>
                     </div>
                    </div>
                   )
            }
            else if(design==="yellow")
                {
                    return (
                        <div className='container-fluid cusmt bg-info'>
                         <div className='row'>
                         <div className='col-6'>Emp Service Page </div>
                         <div className='col-6'>
                         <select className='form-control' onChange={myfunc}>
                                <option>red</option>
                                <option>yellow</option>
                                <option>others</option>
                            </select>
                         </div>
                     </div>
                         <div className='row'>
                            <div className='col-md-12'>
                            <h1>This is Container page </h1>
                            <div className='container'>
                                <div className='row'>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            </div>
                            </div>
                            </div>
                         </div>
                        </div>
                       )
                }
            else 
                {
                    return (
                        <div className='container-fluid cusmt bg-light'>
                         <div className='row'>
                         <div className='col-6'>Emp Service Page </div>
                         <div className='col-6'>
                         <select className='form-control' onChange={myfunc}>
                                <option>green</option>
                                <option>yellow</option>
                                <option>others</option>
                            </select>
                         </div>
                     </div>
                         <div className='row'>
                            <div className='col-md-12'>
                            <h1>This is Container page </h1>
                            <div className='container'>
                                <div className='row'>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            <Mycard/>
                            </div>
                            </div>
                            </div>
                         </div>
                        </div>
                       )
                }





    
}

export default Myemp