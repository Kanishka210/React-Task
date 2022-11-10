import React from "react"
import Virat from "../Images/Virat.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import moment from "moment/moment"
export default function PostCard(props){
    const time=moment(new Date()).fromNow();
return(
    <div className="post-card">
        <div className="post">
            <div className="post-profile">
            <img src={ Virat } alt="profile" className='profile-photo'/>
            <div className="post-profile-details">
                <div className="profile-name"><b>Virat</b></div>
                <div className="designation">Marketing Expert</div>
                <div className="posting-time">{time}</div>
                </div> 
               
            </div>
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
        {/* <div className="content">Virat Kohli is an Indian Cricket Player.</div>   */}
        <div>{props.content}</div>
    </div>
)
}