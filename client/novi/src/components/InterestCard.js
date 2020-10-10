import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
console.log (fas);
function InterestCard ({ id, name, icon }) {
    return (
        <button className="btn btn-info">
            <FontAwesomeIcon icon={['fas', icon]} style={{marginRight: "8px"}} />
            {name}
         
        </button>
    );
}

export default InterestCard;