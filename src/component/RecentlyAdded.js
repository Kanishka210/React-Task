import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const userinformation=[
          {
            id:1,
            icon:<FontAwesomeIcon icon={faArrowRight}/>,
            name: "New Artefacts",
            count:82,
        },
        {
            id:2,
            icon:<FontAwesomeIcon icon={faArrowLeft}/>,
            name: "New Modules",
            count:42,
        },
        {
            id:3,
            icon:<FontAwesomeIcon icon={faAngleDown}/>,
            name: "New Skills",
            count:23,
        },
];
export default userinformation;