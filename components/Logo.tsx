import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="
      font-bold 
      text-3xl 
      bg-gradient-to-r
      from-teal-500 
      to-cyan-400 
      text-transparent 
      bg-clip-text 
      hover:from-teal-400
      hover:to-cyan-300
      transition-all
      "
    >
      Formify
    </Link>
  );
}

export default Logo;
