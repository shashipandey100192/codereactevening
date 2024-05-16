import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Myaxiosapi() {

    const [a, b] = useState([]);
    const Myaxiosapidata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            console.log(d.data);
            b(d.data)
        })
    }

    useEffect(() => {
        Myaxiosapidata();
    })



    return (
        <div class="accordion" id="accordionExample">
            {a.map((x) => {
                return (
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${x.id}`} aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item {x.id}
                            </button>
                        </h2>
                        <div id={x.id} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{x.title}</strong> 
                                <p>{x.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })}



        </div>
    )
}

export default Myaxiosapi