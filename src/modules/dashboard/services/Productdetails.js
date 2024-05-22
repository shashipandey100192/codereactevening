import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const {id}=useParams();

    const [mydata, myfunc] = useState({})

    const myfetchapi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((d) => {
            myfunc(d.data)
    })

    }

    useEffect(() => {
        myfetchapi()
    }, [])


  return (
    <div>
        <h1>Productdetails</h1>
        <h1>{mydata.id}</h1>    
        <h1>{mydata.userId}</h1>    
        <h1>{mydata.title}</h1>    
        <h5>{mydata.body}</h5>    
    </div>
  )
}

export default Productdetails