import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import "../style/Header.scss";

function Header(props) {
    const[condition,setCondition]=useState(true)
        function handleClick(){
          if(condition){
            props.setDisplay(true);
            setCondition(false)
          }
          else{
            props.setDisplay(false);
            setCondition(true)
          }
        }
    
    return(
        <div className='header'>
        <div className='top-bar'>
            <FontAwesomeIcon icon={faArrowLeft} className="left-arrow"/>
            <div className='dash-board'>Dashboard</div>
            <FontAwesomeIcon icon={faAngleRight} className="right-arrow"/>
            <div className='social-feed'>Social Feed</div>
        </div>
            <div className='menu-bar'>
                <FontAwesomeIcon  icon={faBars} onClick={handleClick}/>
             </div>
             </div>
    )
}
export default Header;