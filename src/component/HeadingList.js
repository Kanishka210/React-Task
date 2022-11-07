import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faFilePen, faUser, faUsers, faAddressCard } from "@fortawesome/free-solid-svg-icons";
const userinfo=[
    {
        id:1,
        icon:<FontAwesomeIcon icon={faFileLines}/>,
        name: "Buzz home",
        count:"",
    },
    {
        id:2,
        icon:<FontAwesomeIcon icon={faFileLines}/>,
        name: "My Buzz name",
        count:8,
    },
    {
        id:3,
        icon:<FontAwesomeIcon icon={faFilePen}/>,
        name: "Draft Posts",
        count:2,
    },
    {
        id:4,
        icon:<FontAwesomeIcon icon={faUser}/>,
        name: "My Followers",
        count:33,
    },
    {
        id:5,
        icon:<FontAwesomeIcon icon={faUser}/>,
        name: "I am Following",
        count:33,
    },
    {
        id:6,
        icon:<FontAwesomeIcon icon={faUsers}/>,
        name: "My Teams",
        count:12,
    },
    {
        id:7,
        icon:<FontAwesomeIcon icon={faAddressCard}/>,
        name: "My Reportees",
        count:12,
    },
];
export default userinfo;