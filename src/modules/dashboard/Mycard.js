import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
const myimg ="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg";

const a = "Card Title:";

function Mycard() {
const [x,y]=useState("this is card type")   

const  myfunc = ()=>{
    // alert("welcome to reactjs");
    y(prompt("enter new text"));
}

    return (
        <div className='col-md-3 mt-3'>
            <div className="card bg-light shadow p-3">
                <img src={myimg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{a} <span className='h4'> <FcApproval/></span></h5>
                    <p className="card-text">{x}</p>
                    <a href="#" className="btn btn-primary btn-sm"> <FaRegUser />Go{10+20}</a>
                    <input type='button' value="message" className='btn btn-sm btn-warning ms-2' onClick={myfunc}/>
                </div>
            </div>
        </div>
    )
}

export default Mycard