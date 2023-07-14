import React from 'react'
import Image from 'next/image'

function Card(props) {
    return (
        <div className="card m-4 rounded-0" style={{"width": "18rem", "height" : "37rem"}}>
            <Image src={props.image} className="card-img-top rounded-0" alt="..."/>
                <div className="card-body text-center card-hover">
                    <h5 className="card-title p-1">{props.heading}</h5>
                    <p className="card-text p-1">{props.about}</p>
                </div>
        </div>
    )
}

export default Card
