/*
 * @Author: hiyan
 * @Date: 2020-09-25 16:19:40
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-25 18:23:51
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
export default function MovieCard() {
  const [movie, setMovie] = useState({});
  const [Id, setId] = useState();
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleSubmitClick = () => {
    setIdFromButtonClick(Id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input
        type="text"
        value={Id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmitClick}>
        Fetch Data
      </button>
      <h2>{movie.title}</h2>
    </div>
  );
}
