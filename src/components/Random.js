import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  //   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const result = await axios.get(url);
  //     const data = result.data;
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const [gif, setGif] = useState("");
  const { gif, loading, fetchData } = useGif();
  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-[40%] h-full bg-green-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] uppercase font-bold underline text-2xl">
        Random GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} className="h-[90%] w-[90%] rounded-lg" alt="gif" />
      )}

      <button
        className="w-9/12 bg-white py-2 rounded-lg mb-[20px] "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
