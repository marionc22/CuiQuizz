/* eslint-disable */

import React from 'react';
const PoserQuestion = (props) => {
    return (
        <>
        <div className='currentPlayer'>
         {props.currentPlayer}
        </div>
        <br></br>
        <br></br>
        <div className='question'>
            {props.question}
        </div>
        </>
    );
};
export default PoserQuestion;