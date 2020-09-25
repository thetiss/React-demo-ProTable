/*
 * @Author: hiyan
 * @Date: 2020-09-25 16:19:40
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-25 17:28:20
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
export default function MovieCard() {
  const [movie, setMovie] = useState({});
  const [Id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Id]);
  return (
    <div>
      <input
        type="text"
        value={Id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h2>{movie.title}</h2>
    </div>
  );
}
