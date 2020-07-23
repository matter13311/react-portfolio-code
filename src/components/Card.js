import React from 'react';
import CardInfo from '../components/CardInfo';
function Card(props) {

    return(
        
        <div>
            <div className="d-inline-block m-card card-container" >
                <div className="card">
                    <figure className="front">
                        <img className="m-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
                    </figure>
                    <figure className="back">
                        <p>{props.item.description}</p>
                    </figure>    
                </div> 
            </div>
            <CardInfo title ={props.item.title} subTitle={props.item.subTitle} link={props.item.link} demoLink={props.item.demoLink}/> 
        </div>
        
    );

}

export default Card;
