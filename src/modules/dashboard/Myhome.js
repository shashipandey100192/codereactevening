import React, { useEffect, useState } from 'react'
import Mycard from './Mycard';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Myhome() {
    const {id} = useParams();

    const [x, y] = useState([]);

    const myjsondata = () => {
        axios.get('http://localhost:5500/users').then((d) => {
            y(d.data);
            // console.log(d);
        })
    }

    useEffect(() => {
        myjsondata();
    }, [])

    const mydel =(id)=>{
        axios.delete('http://localhost:5500/users/'+id).then((d) => {
            console.log(d)
            myjsondata();
        })

    }
    const abcd = useSelector((state) => state.counter.value)
    const ctr = useSelector((state) => state.ecom.mycard)

    return (
        <div className='container-fluid mt-5 cusmt'>
            <div className='row'>
                <div className='col'>
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Header {abcd}</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-warning mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-info mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='card shadow'>
                    <h4>Json server Data</h4>
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
                            {x.map((d) => {
                                return (
                                    <tr>
                                        <th scope="row">101</th>
                                        <td>{d.username}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.email}</td>
                                        <td>{d.gender}</td>
                                        <td>
                                            <Link to={`view/`+d.id} className='btn btn-success btn-sm'>View</Link>
                                            <Link to={`edit/` + d.id} className='btn btn-info btn-sm ms-2'>Edit</Link>
                                            <button className='btn btn-danger btn-sm ms-2' onClick={()=> mydel(d.id)}>Del</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>




                </div>
            </div>
            <div className='row'>
                <div className='col-12 p-2'>
                    <p className='h3'>{ctr}</p>
                </div>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
                <Mycard></Mycard>
            </div>
        </div>
    )
}

export default Myhome