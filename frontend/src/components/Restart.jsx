/* eslint-disable */

import React from 'react';

const Restart = () => {

    function refresh() {
        window.location.reload(false);
      }

    return (
        <div>
            <button className='button' onClick={refresh}>RESTART</button>
        </div>
    );
};

export default Restart;