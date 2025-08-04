import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

const links = [
  {
    label: "Resume",
    icon: <FaFileAlt />,
    href: "https://drive.google.com/file/d/12W0YsnwP0t5yN8S4qo9Ipc1S35wymnWa/view",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:danylo.provodov@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/danylo-provodov/",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/provodokkk",
  },
];

export default links;
