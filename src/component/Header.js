import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../style/Header.scss";
function Header() {
    return(
        <div className='header'>
            <FontAwesomeIcon icon={faArrowLeft} className="leftArrow"/>
            <div className='dashBoard'>Dashboard</div>
            <FontAwesomeIcon icon={faAngleRight} className="rightArrow"/>
            <div className='socialFeed'>Social Feed</div>
        </div>
    )
}
export default Header;