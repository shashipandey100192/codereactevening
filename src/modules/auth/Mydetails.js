import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useParams,Link } from 'react-router-dom';

function Mydetails() {
    const [d,b]=useState([]);
    const mynav = useNavigate();
    const {id} = useParams();

    const singlerecord = ()=>{
        axios.get(`http://localhost:5500/users/${id}`).then((d)=>{
            b(d.data);
        })
    }
useEffect(()=>{
    singlerecord();
},[]);


  return (
    <div className='container-fluid mt-5 cusmt'>
            <div className='row'>
                <div className='card shadow'>
                    <h4>Single Record Deisplay</h4>
                    <hr />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">userName</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Email id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                    <tr>
                                        <th scope="row">101</th>
                                        <td>{d.username}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.email}</td>
                                        <td>{d.gender}</td>
                                        <td>
                                            <Link to="" className='btn btn-success btn-sm'>View</Link>
                                            <Link to={`/landing/edit/` + d.id} className='btn btn-info btn-sm ms-2'>Edit</Link>
                                        
                                        </td>
                                    </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
  )
}

export default Mydetails