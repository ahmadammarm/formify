import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={'/'}
      className="
      font-bold 
      text-3xl 
      bg-gradient-to-r
      from-teal-500 
      to-cyan-400 
      text-transparent 
      bg-clip-text 
      hover:text-teal-400
      transition
      duration-150
      ease-in-out
      "
    >
      Formify
    </Link>
  );
}

export default Logo;
