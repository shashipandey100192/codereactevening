import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Myregistor() {
    const [fld,setfld]=useState({
        username:"ravi",
        phone:"",
        email:"",
        gender:"",
        pass:"",
        repass:""
    })

    const  myformsumit = (e)=>{
        e.preventDefault();
        console.log(fld);
        axios.post('http://localhost:5500/users',fld).then((g)=>{
            console.log(g);
        })

    }

    const setdata = (e)=>{
        const {name,value} = e.target;
        setfld((x)=>{
          return{
            ...x,
            [name]:value
          }
        })
      }





  return (
    <form onSubmit={myformsumit}> 
    <div className='container p-5'>
        <div className='row justify-content-md-center'>
            <div className='col-md-4 bg-light shadow p-5 mt-5'>
                <p className='h3 text-center'>User Registor Page</p>
                <hr/>
                <div class="mb-3">
                    <label  class="form-label">UserName</label>
                    {/* <input type="text" class="form-control" placeholder='username' name="username" value={fld.username} onInput={e=> setfld({...e,username:e.target.value})}/> */}
                    <input type="text" class="form-control" placeholder='username' name="username" value={fld.username} onInput={setdata}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Phone No</label>
                    <input type="text" class="form-control" placeholder='phone no' name='phone' value={fld.phone} onInput={setdata}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Email id</label>
                    <input type="email" class="form-control" placeholder='email' name='email' value={fld.email} onInput={setdata}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Gender</label>
                  <select className='form-control' name='gender' value={fld.gender} onInput={setdata}> 
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div class="mb-3">
                    <label  class="form-label">Ceate Password</label>
                    <input type="password" class="form-control" placeholder='password' name='pass' value={fld.pass} onInput={setdata}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Reenter Password</label>
                    <input type="password" class="form-control" placeholder='password' name='repass' value={fld.repass} onInput={setdata}/>
                </div>
                <div class="mb-3">
                    <input type='submit' className='btn btn-success ms-4' value="submit"/>
                    <input type='reset' className='btn btn-danger ms-5' value="cancel"/>
                    <Link to='/' className='ms-5'>User Login</Link>
                </div>
        </div>
        </div>
    </div>
    </form>
  )
}

export default Myregistor