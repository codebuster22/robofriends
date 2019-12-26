import React from 'react';
import './CSS/Card.css';

const Card = (props)=> (
        <div className={"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2"}>
            <img className={"bg-sky-blue br-100 pa1 ba b--black-10 h5 w5"} src={`https://robohash.org/${props.name}?size=200x200`} alt={"Avatar"}/>
            <div>
                <h2 className={"f3 mb2"}>{props.name}</h2>
                <p className={"f5 fw4 gray mt0"}>{props.username}</p>
            </div>
        </div>
    );

export default Card;