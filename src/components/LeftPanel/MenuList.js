import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import SideHeading from "./SideHeading";

function PrimaryButton(props){
    const data=props.menuList;
    const limit=props.limit;
    const [seeMore, setSeeMore]=useState(false);
    const seeMoreButton =() =>{
        setSeeMore(!seeMore);
    }
    return(
        <div>
            {(seeMore ? data : data.slice(0,limit)).map((menu) => {
                return(<SideHeading items={menu} />)
            })}
            <button onClick={seeMoreButton} className="see-more"> {seeMore ? "See less" : "See more"}
            {seeMore ? <FontAwesomeIcon icon={ faChevronUp } className="arrow-icon"></FontAwesomeIcon> :
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon"></FontAwesomeIcon>}</button>
        </div>
    )
    
        }
export default PrimaryButton;
