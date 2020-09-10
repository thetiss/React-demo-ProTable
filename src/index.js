import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import IssueTable from "./compontents/IssueTable";
import "antd/dist/antd.min.css";

ReactDOM.render(<IssueTable />, document.getElementById("root"));
serviceWorker.unregister();
