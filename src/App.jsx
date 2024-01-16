import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col  items-center   relative overflow-x-hidden">
      <h1 className="bg-white rounded-md text-center text-4xl font-bold mt-[20px] w-11/12  ">
        RANDOM GIFS
      </h1>
      <div className="flex justify-between w-full items-center py-10 px-[20px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
