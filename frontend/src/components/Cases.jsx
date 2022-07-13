/* eslint-disable */
import React from 'react';
const Cases = (props) => {
    return (
        <div className={props.nom}>
        <h2 >{props.nom}</h2>
        <div className= "playerPlace">
        <img src ={props.player1Place} alt = "player1" className='mini' />
        <img src ={props.player2Place} alt = "player2" className='mini'  />
        <img src ={props.player3Place} alt = "player3" className='mini'  />
        </div>
        </div>
    );
};
export default Cases;