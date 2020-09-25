/*
 * @Author: hiyan
 * @Date: 2020-09-25 19:39:34
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-25 20:01:35
 */

import React from "react";
import axios from "axios";

// base url to make request to the same movie database
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
// by doing this,appending to baseURL
// https://api.themoviedb.org/3/foo-bar
// instance.get("/foo-bar");
export default instance;
