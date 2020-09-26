import React from 'react'
import PropTypes from 'prop-types'
import Image from "react-bootstrap/Image"

function AddProfileImage(props) {
    return (
        <div>
            {/* <p>hello</p> */}
             <Image 
             className ="mx-auto my-4 d-block"
             src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
             width ="150px" roundedCircle/>
        </div>
    )
}

AddProfileImage.propTypes = {

}

export default AddProfileImage

