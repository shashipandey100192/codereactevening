import React, { useEffect, useState } from 'react'

function Myfetchfunc() {
const [mydata,myfunc]=useState([])

    const myfetchapi=()=>
    {
        fetch('https://jsonplaceholder.typicode.com/photos').then((d)=>{
            // console.log(d.json());
            return d.json();
        }).then((a)=>{
            console.log(a);
            myfunc(a);
        })
      
    }

useEffect(()=>{
    myfetchapi()
},[])


  return (
    <div className='container-fluid cusmt'>
    <div className='row'>
        <div className='col-6'>use of Fetch methods</div>
            
    </div>
    <div className='row'>
       
            {mydata.map((d)=>{
                return(
                    <div className='col-md-2'>
                    <img src={d.url} alt='sdjfksjdf' className='img-fluid'/>
                    </div>
                )
            })}
        </div>
   
    </div>
  )
}

export default Myfetchfunc