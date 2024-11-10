import React from "react";
import {
  FaHtml5,
  FaVuejs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { DiDjango, DiPostgresql } from "react-icons/di";
import { SiJavascript, SiSqlite, SiSfml, SiTailwindcss } from "react-icons/si";

function ToolList({ tools }) {
  const iconsList = {
    Vue: <FaVuejs className="text-4xl" />,
    SFML: <SiSfml className="text-4xl" />,
    HTML: <FaHtml5 className="text-4xl" />,
    CSS: <FaCss3Alt className="text-4xl" />,
    React: <FaReact className="text-4xl" />,
    NodeJS: <FaNodeJs className="text-4xl" />,
    Python: <FaPython className="text-4xl" />,
    SQLite: <SiSqlite className="text-4xl" />,
    Django: <DiDjango className="text-4xl" />,
    "C++": <TbBrandCpp className="text-4xl" />,
    Bootstrap: <FaBootstrap className="text-4xl" />,
    Tailwind: <SiTailwindcss className="text-4xl" />,
    JavaScript: <SiJavascript className="text-4xl" />,
    Postgresql: <DiPostgresql className="text-4xl" />,
  };
  const emptyIcon = <FaVuejs className="text-4xl opacity-0" />;

  return (
    <div className="flex flex-col gap-2">
      {tools.map((tool) => (
        <div key={tool} className="flex items-center gap-8">
          <div>{iconsList[tool] || emptyIcon}</div>
          <span className="text-lg font-bold">{tool}</span>
        </div>
      ))}
    </div>
  );
}

export default ToolList;
