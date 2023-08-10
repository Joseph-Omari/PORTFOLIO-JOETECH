import React from "react";
import {
  BsGithub,
  BsWhatsapp,
  BsInstagram,
  BsFiletypeCss,
} from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaReact, FaPhp } from "react-icons/fa";
import {DiJavascript} from "react-icons/di"
import {SiTailwindcss} from "react-icons/si"
import Mypic from "../../../public/mypic.jpg"
import Image from "next/image";

const landpage = () => {
  return (
    <div className="min-h-screen w-full items-center flex justify-center mx-auto px-10 md:px-4 " id="homepage">
      <div className="mt-20">
        <div className="md:flex flex-row-reverse items-center md:gap-8 block space-y-10 md:space-y-0">
          <div>
            <div className="md:w-[20rem]  bg-sky-600 rounded-bl-full justify-center items-right flex rounded-tr-full shadow-xl ">
              <Image src={Mypic} priority alt="Picture of the author" className="rounded-full shadow-xl" />
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="text-left font-bold md:text-[3rem] text-[2rem] text-sky-600 ">
              Fullstack Nextjs <br /> <span className=" ">Developer.</span>
            </h1>
            <h1>
              Hi, I&apos;m Joseph Omari. A passionate Fullstack Nextjs
              developer.
              <br />
              Developer based in Ghana
            </h1>
            <div className="flex gap-4 items-center">
              {/* Social media handles */}
              <a
                href="https://github.com/Joseph-Omari"
                className="text-[1.5rem] "
              >
                <BsGithub />
              </a>
              <a
                href="https://wa.me/233543769376"
                className="text-[1.5rem]  text-green-700"
              >
                <BsWhatsapp />
              </a>
              <a href="/" className="text-[1.5rem]  text-sky-600 ">
                <BiPhoneCall />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1qdglw3x1ipty&utm_content=ayflwuz"
                className="text-[1.5rem] "
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-center md:justify-start">
          <div className="space-y-4 md:flex items-center md:space-y-0">
            <h1 className="font-bold underline md:no-underline text-center justify-center flex">
              Tech Stack <span className="mx-4 mr-10 hidden md:flex">|</span>
            </h1>
            <div className="flex gap-10 items-center">
              {/* Social media handles */}
              <a href="/" className="text-[1.5rem] text-sky-600 ">
                <FaReact />
              </a>
              <a href="/" className="text-[1.5rem]  text-yellow-600">
                <DiJavascript />
              </a>
              <a href="/" className="text-[1.5rem]  text-sky-600 ">
                <SiTailwindcss />
              </a>
              <a href="/" className="text-[1.5rem] ">
                <BsFiletypeCss />
              </a>
              <a href="/" className="text-[1.5rem] ">
                <FaPhp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landpage;
