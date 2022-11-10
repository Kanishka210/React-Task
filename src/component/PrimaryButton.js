import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import SideHeading from "./SideHeading";

function IsSeeMore(props){
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
            <button onClick={buttonClicked} className="see-more">{buttonState ? "See less" : "See more"}
            {buttonState?<FontAwesomeIcon icon={ faChevronUp } className="arrow-icon"></FontAwesomeIcon>:
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon"></FontAwesomeIcon>}</button>
        </div>
    )
    
        }
export default IsSeeMore;
