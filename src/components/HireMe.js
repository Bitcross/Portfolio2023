import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0
    "
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"animate-spin-slow fill-purple-500"}
        />

        <Link
          href="mailto:cmooney1423@gmail.com"
          className="flex items-center justify-center
absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid  w-20 h-20 rounded-full
font-semibold bg-purple-900 text-purple-300 border-purple-900 hover:bg-dark hover:text-purple-700
                  hover:border-purple-700
md:w-12 md:h-12 md:text-[10px]

"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
