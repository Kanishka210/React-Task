import { useState } from "react";
import Virat from "../Images/Virat.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo, faCamera } from "@fortawesome/free-solid-svg-icons";

function MessageCard(props) {
    const [userInput, setUserInput] = useState("");
    const submitHandler = (e) => {
        console.log("submit handler")
        e.preventDefault();
        if(userInput===""|| userInput.match(/^ *$/) !== null) return;
        console.log(userInput)
        props.content(userInput)
        setUserInput("");
    }

    return (
            <div className='message'>

                <form className="profile-pic-input" onSubmit={submitHandler}>
                    <img src={Virat} alt="profile" className='profile-photo' />
                    <input type="text" placeholder="Share something here..." onChange={(e) => { setUserInput(e.target.value); }} value={userInput}></input>
                </form>


                <div className='icons'>
                    <div className='attachment'>
                        <FontAwesomeIcon icon={faVideo} className="icon" /> Any attachment
                        {/* <p> Any attachment </p> */}
                    </div>

                    <div className='attachment'>
                        <FontAwesomeIcon icon={faCamera} className="icon" /> Capture it
                        {/* <p> Capture it </p> */}
                    </div>

                    <div className='attachment'>
                        <FontAwesomeIcon icon={faMicrophone} className="icon" />Say it
                        {/* <p> Say it </p> */}
                    </div>
                </div>
            </div>
            
            // <div className="text-box">
            //     <div className="profile-info">
            //         <img src={ Virat } alt="profile-info" className="profile-photo"/>
            //         <div className="profile-detail">
            //         <div className='profile-name'><b>Virat Kohli</b></div>
            //         <div className="profile-name"><b>Marketing Expert</b></div>
            //         <div className="profile-name"><b>few hours ago</b></div>
            //         </div>
            //         <div className="dot"><b>...</b></div>
            //     </div>
                
            //     </div>  

    )
}
export default MessageCard;