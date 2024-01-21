import React from "react";

function Button({ name, link }) {
  return link ? (
    <a
      className="bg-blue-700 cursor-pointer hover:bg-blue-800 transition-all text-white p-3 rounded-3xl px-6 "
      href={link}
    >
      {name}
    </a>
  ) : (
    <button
      className="bg-blue-700 cursor-pointer hover:bg-blue-800 transition-all text-white p-3 rounded-3xl px-6"
      href={link}
    >
      {name}
    </button>
  );
}

export default Button;
