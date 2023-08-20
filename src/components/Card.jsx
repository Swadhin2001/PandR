import React from 'react'
import Image from 'next/image'

function Card(props) {
    return (
        <div className="card  rounded-0  border border-secondary" style={{"width": "auto", "height" : `${props.height}`}}>
            <Image src={props.image} className="card-img-top rounded-0 " alt="..."/>
            <div className="card-body text-center card-hover card-div ">
                <h5 className="card-title p-1 elementor-container-cards-h5">{props.heading}</h5>
                <p className="card-text p-1 elementor-container-cards-p">{props.about}</p>
            </div>
        </div>
    )
}

export default Card
