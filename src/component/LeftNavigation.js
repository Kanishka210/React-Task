import React from 'react'
//import {useState} from 'react';
import "../style/LeftNavigation.scss";
import Virat from '../Images/Virat.jpg';
import SideHeading from './SideHeading'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import {userinfo,userinformation,moreoption} from './ListParameter'
import IsSeeMore from './PrimaryButton';
// import userinformation from './RecentlyAdded';
// import moreoption from "./MoreOptionData"

function LeftNavigation({display}){
    // const value=props.data;
    // const [buttonState, setButtonState]=useState(false);
    // const buttonClicked =() =>{
    //     setButtonState(!buttonState)
    // }
    return(
        <div className={display?'disappear':'left-navigation'}>
            {console.log(display)}
        <div className='profile'>
            <img src={ Virat } alt="profile" className='profile-photo'/>
            <div className='profile-name'><b>Virat Kohli</b></div>
            </div> 

            {userinfo.map((menu)=>{
              return (<SideHeading props={menu}/>)
            })}

            {/* <div>
            {buttonState && value.map((menu) =>{
                return(<SideHeading props={menu}/>)
            })}
            <button onClick={buttonClicked} className="see-more">{buttonState ? "See less" : "See more"}
            {buttonState?<FontAwesomeIcon icon={ faChevronUp } className="arrow-icon"></FontAwesomeIcon>:
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon"></FontAwesomeIcon>}</button>
        </div> */}


            <IsSeeMore data = {moreoption}/>

            <p><b>Recently added:</b></p>

            {userinformation.map((menu) => {
            return (<SideHeading props={menu}/>)
        })}

            <IsSeeMore data = {moreoption}/>
        </div>
    )
}
export default LeftNavigation;