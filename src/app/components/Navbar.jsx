import React from "react";
import { FaBarsStaggered} from "react-icons/fa6";

const navbar = () => {
  return (
    <div className="fixed w-full shadow-xl h-12 md:h-16 bg-white opacity-90">
      <div className="flex justify-between items-center h-full w-full p-4">
        <a href="/" className="font-bold text-sky-600">
          Joetech.dev
        </a>
        <div className="">
          <ul className="md:flex gap-2 md:gap-4 xl:gap-6 hidden">
            <a href="#homepage">
              <li>Home</li>
            </a>

            <a href="">
              <li>Project</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>

          <button className="flex md:hidden"><FaBarsStaggered/></button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
{/* <FaBarsStaggered />; */}