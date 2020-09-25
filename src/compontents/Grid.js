/*
 * @Author: hiyan
 * @Date: 2020-09-25 19:39:27
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-25 20:02:41
 */

import React from "react";
import Row from "./Row";

export default function Grid() {
  return (
    <React.Fragment>
      <h1>Try axios with async and await</h1>
      <Row title="row1" fetchUrl="/posts" />
      <Row title="row2" fetchUrl="/posts/1/comments" />
    </React.Fragment>
  );
}
