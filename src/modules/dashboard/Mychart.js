import React, { useEffect, useState } from 'react'

import Mycirclechart from './Mycirclechart.tsx';
import Mychartleft from './Mychartleft.js';
import axios from 'axios';
const name = "Charts";




function Mychartpage() {
    const [mydata,mysetdata]=useState([])
    const myapifunc = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((d)=>{
                mysetdata(d.data)
        })
    }

    useEffect(()=>{
        myapifunc();
    },[])

    return (
        <div className='container-fluid cusmt'>
            <div className='row'>
                <div className='col-12'>
                    <h4>This is parent Element {name}</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <Mychartleft arjun={name} dropdata={mydata}/>
                </div>
                <div className='col-md-4'>
                       <Mycirclechart shakti={name}/>
                </div>
            </div>
        </div>
    )
}

export default Mychartpage