import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");

  function changeHandler(event) {
    setTag(event.target.value);
  }

  const { fetchData, loading, gif } = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }
  return (
    <div className=" h-full w-[40%] bg-blue-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className=" mt-[15px] uppercase font-bold underline text-2xl">
        Random {tag} GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          className="w-[90%] h-[90%] rounded-lg"
          width="450px"
          alt="gif"
        />
      )}
      <input
        onChange={changeHandler}
        value={tag}
        className="w-10/12 border bg-white py-2 rounded-lg mb-[6px] text-center"
      />
      <button
        className="w-9/12 bg-white py-2 rounded-lg mb-[20px] "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
