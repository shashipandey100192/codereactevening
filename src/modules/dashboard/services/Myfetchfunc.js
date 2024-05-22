import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Myfetchfunc() {
    const [mydata, myfunc] = useState([])

    const myfetchapi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((d) => {
            // console.log(d.json());
            return d.json();
        }).then((a) => {
            console.log(a);
            myfunc(a);
        })

    }

    useEffect(() => {
        myfetchapi()
    }, [])


    return (
        <div className='container-fluid cusmt'>
            <div className='row'>
                <div className='col-12 bg-info'> <h1>use of Fetch methods react js</h1></div>

            </div>
            <div className='row'>

                {mydata.map((d) => {
                    return (
                        <div className='col-md-4 mt-3'>
                            <div className='card p-3 shadow bg-light'>
                                <h2>{d.id}</h2>
                                <h5>{d.title}</h5>
                                <hr/>
                                <p>{d.body}</p>
                                <Link to={`view/`+d.id} className='btn btn-success btn-sm'>Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Myfetchfunc