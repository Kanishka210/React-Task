import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faUser,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";

const recentlyAdded = [
  {
    url: "/NewArtefacts",
    id: 1,
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: "New Artefacts",
    count: 82,
  },
  {
    url: "/NewModules",
    id: 2,
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: "New Modules",
    count: 42,
  },
  {
    url: "/NewSkills",
    id: 3,
    icon: <FontAwesomeIcon icon={faFilePen} />,
    name: "New Skills",
    count: 23,
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
];
export default recentlyAdded;
