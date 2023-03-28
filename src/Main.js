import React from "react"
export default function Main(props){
    return(
        <div className="main-div">
        <div className="main-comp ">
        <div className="img-div">
        <img src={props.imageUrl}/>
        </div>
        <div className="main-info">
        <div className="info">
        <i class="fa-solid fa-location-dot"></i>
        <small>    {props.title}    </small>
        <a href={props.googleMapsUrl} target="_blank" >View on Google Maps</a>
        </div>
        <div className="city-name"> <small> {props.location} </small> </div>
        <div className="date">
        <small>{props.startDate} - </small>
        <small>{props.endDate} </small>
        </div>
        <div className="para">
        <p>{props.description}</p>
        </div>
        </div> 
        </div>
        </div>
    )
}