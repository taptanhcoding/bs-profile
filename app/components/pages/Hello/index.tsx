import React from "react";
import { BiBriefcaseAlt } from "react-icons/bi";
export function Hello() {
  return (
    <div className="bg-[url('https://i.pinimg.com/564x/b3/bb/d5/b3bbd51902ed24fb8cbaf74f799f3172.jpg')] bg-cover h-screen flex items-end p-8 pb-32">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h1 className="text-white text-6xl font-fair_play">
          Hi! <br />
          {"I'm Le Cong Chuyen,"}
          <br/>
          <p className="text-xl">a developer website</p>
        </h1>
        <button className="border-solid border-[1px] border-white p-2 text-white mt-4 flex flex-row items-center">
          <span>Download CV </span>{" "}
          <span className="ml-1">
            <BiBriefcaseAlt />
          </span>
        </button>
      </div>
    </div>
  );
}
