import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faHouseUser,
  faInbox,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const listParameter = [
  {
    url: "/",
    id: 1,
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: "Buzz home",
    count: "",
  },
  {
    url: "/BuzzName",
    id: 2,
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: "My Buzz name",
    count: 8,
  },
  {
    url: "/DraftPost",
    id: 3,
    icon: <FontAwesomeIcon icon={faFilePen} />,
    name: "Draft Posts",
    count: 2,
  },
  {
    url: "/MyFollowers",
    id: 4,
    icon: <FontAwesomeIcon icon={faUser} />,
    name: "My Followers",
    count: 33,
  },
  {
    url: "/Following",
    id: 5,
    icon: <FontAwesomeIcon icon={faUser} />,
    name: "I am Following",
    count: 33,

  },
  {
    url: "/MyTeam",
    id: 6,
    icon: <FontAwesomeIcon icon={faUsers} />,
    name: "My Teams",
    count: 12,
  },
  {
    url: "/MyReportees",
    id: 7,
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    name: "My Reportees",
    count: 12,
  },
  {
    url: "/HomePage",
    id: 8,
    icon: <FontAwesomeIcon icon={faHouseUser} />,
    name: "Home page",
    count: 21,
  },
  {
    url: "/Inbox",
    id: 9,
    icon: <FontAwesomeIcon icon={faInbox} />,
    name: "Inbox",
    count: 8,
  },
  {
    url: "/DraftItem",
    id: 10,
    icon: <FontAwesomeIcon icon={faFilePen} />,
    name: "Draft items",
    count: 2,
  },
];

export default listParameter;
