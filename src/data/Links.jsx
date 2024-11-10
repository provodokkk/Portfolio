import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaFileAlt,
  FaDiscord,
} from "react-icons/fa";

const links = [
  {
    label: "Resume",
    icon: <FaFileAlt />,
    href: "https://drive.google.com/file/d/1C739RclU_Bk_rpyxxnjwqQzyZknp2nrf/view",
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
  {
    label: "Discord",
    icon: <FaDiscord />,
    href: "discordapp.com/users/780550358979969034",
  },
];

export default links;
