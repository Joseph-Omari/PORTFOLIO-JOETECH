import React from "react";
import abimage from "../../../public/download.jpeg";
import Image from "next/image";

const about = () => {
  return (
    <div
      className="min-h-screen w-full items-center flex justify-center mx-auto p-10 md:px-4"
      id="about"
    >
      <div className="md:flex gap-8 mx-auto lg:w-1/2">
        <div className="flex-1">
          <div className="">
            <Image
              src={abimage}
              priority
              alt="Picture of the author"
              className="w-full h-full rounded-lg drop-shadow-lg"
            />
          </div>
        </div>
        <div className="space-y-8 flex-1">
          <div className="space-y-4 ">
            <h1 className="text-sky-600 font-bold">ABOUT ME </h1>
            <h1 className="font-bold text-xl">
              A dedicated Fullstack Developer <br /> based in Accra, Ghana.
            </h1>
          </div>
          <div>
            <h1 className=" text-left ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              doloribus reiciendis est repudiandae vero, ut sit doloremque atque
              a, hic suscipit tempore natus saepe illum aut nihil rerum at
              adipisci?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
