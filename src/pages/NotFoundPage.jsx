import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({ errorMessage = "" }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <span className="text-9xl mb-10">{errorMessage || "404 Not Found"}</span>
      <Link
        to="/"
        className="text-blue-custom text-5xl font-bold hover:underline hover:text-blue-400 transition duration-300"
        aria-label="Go to Home Page"
      >
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
