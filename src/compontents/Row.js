/*
 * @Author: hiyan
 * @Date: 2020-09-25 19:39:20
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-27 11:26:24
 */

import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data);
    console.log(request.data);
  };
  useEffect(() => {
    fetchData();
    // if [],run once when the row loads,and dont run again
    // variables(fetchUrl) outside of useEffect must be included in the dependency array,when fetchUrl is change,will fetchData() again
  }, [fetchUrl]);
  //console.log(movies);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.id}</li>
        ))}
      </ul>
    </div>
  );
}
