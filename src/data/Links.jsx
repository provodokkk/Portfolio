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
    href: "https://drive.google.com/file/d/1t-Np_0byZjiwbExYJT2oUfW_2Hzhq1Ej/view",
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
