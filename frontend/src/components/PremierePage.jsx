/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const PremierePage = (props) => {

    return (
        <div className='intro'>
          <video src='./cuiquizz.mp4' width={"600px"} autoPlay muted></video>
            <Link to = "/Jeu"><input type="image" src="./insertcoin.png" alt="Submit" className='insertCoin'/></Link>
        </div>
    );
};

export default PremierePage;