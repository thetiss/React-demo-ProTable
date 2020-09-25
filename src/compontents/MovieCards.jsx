/*
 * @Author: hiyan
 * @Date: 2020-09-25 16:19:40
 * @Last Modified by:   hiyan
 * @Last Modified time: 2020-09-25 16:19:40
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
export default function MovieCard() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        setMovieList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
