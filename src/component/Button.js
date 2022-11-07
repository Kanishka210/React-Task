import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import SideHeading from "./SideHeading";

function SeeMore(props){
    const value=props.data;
    const [buttonState, setButtonState]=useState(false);
    const buttonClicked =() =>{
        setButtonState(!buttonState)
    }
    return(
        <div>
            {buttonState && value.map((menu) =>{
                return(<SideHeading props={menu}/>)
            })}
            <button onClick={buttonClicked} >{buttonState ? "See Less" : "See More"}
            {buttonState?<FontAwesomeIcon icon={ faChevronUp }></FontAwesomeIcon>:
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>}</button>
        </div>
    )
    
        }
export default SeeMore;