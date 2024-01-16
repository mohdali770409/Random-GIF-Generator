import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useGif = (tag) => {
  const [loading, setLoading] = useState("false");
  const [gif, setGif] = useState("");

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData(tag) {
    setLoading(true);

    const result = await axios.get(tag ? tagUrl : randomUrl);
    const data = result.data;
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(tag);
  }, []);
  return { gif, loading, fetchData };
};

export default useGif;
