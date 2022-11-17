import { useState } from "react";
import Virat from "../../Images/Virat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCamera,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

function MessageCard(props) {
  const [userInput, setUserInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") {
      return;
    }
    props.content(userInput);
    setUserInput("");
  };

  return (
    <div className="message-card">
      <form className="profile-pic-input" onSubmit={submitHandler}>
        <img src={Virat} alt="profile" className="profile-photo" />
        <input
          type="text"
          placeholder="Share something here..."
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        ></input>
      </form>

      <div className="icons">
        <div className="attachment">
          <FontAwesomeIcon icon={faVideo} className="icon" /> Any attachment
        </div>

        <div className="attachment">
          <FontAwesomeIcon icon={faCamera} className="icon" /> Capture it
        </div>

        <div className="attachment">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
          Say it
        </div>
      </div>
    </div>
  );
}
export default MessageCard;
