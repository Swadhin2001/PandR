import React from 'react'
import Image from 'next/image'
function Card_Image(props) {
    return (
        <div>
            <div className="card rounded-0 my-3 border border-secondary" style={{"width": "13rem", "height": "19rem"}}>
                <Image src={props.image} className="card-img-top rounded-0" alt="..." style = {{"height": "11rem","objectFit": "cover"}}/>
                    <div className="card-body card-on-hover">
                        <h4 className="card-text text-center" style = {{"fontWeight": "600","fontSize":"15px", "lineHeight": "19px"}}> {props.heading}</h4>
                        <p className="card-text text-center" style = {{"fontWeight": "400","fontSize":"14px", "lineHeight": "21px"}}>{props.about}</p>
                    </div>
            </div>
        </div>
    )
}

export default Card_Image
