import React from 'react'

import Mycirclechart from './Mycirclechart.tsx';
import Mychartleft from './Mychartleft.js';
const name = "Charts";


function Mychartpage() {
    return (
        <div className='container-fluid cusmt'>
            <div className='row'>
                <div className='col-12'>
                    <h4>This is parent Element {name}</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <Mychartleft arjun={name}/>
                </div>
                <div className='col-md-4'>
                       <Mycirclechart shakti={name}/>
                </div>
            </div>
        </div>
    )
}

export default Mychartpage