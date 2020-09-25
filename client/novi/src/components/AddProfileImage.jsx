import React from 'react'
import PropTypes from 'prop-types'
import Image from "react-bootstrap/Image"

function AddProfileImage(props) {
    return (
        <div>
            {/* <p>hello</p> */}
             <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rounded/>
        </div>
    )
}

AddProfileImage.propTypes = {

}

export default AddProfileImage

