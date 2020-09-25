import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import * as serviceWorker from "./serviceWorker";
import IssueTable from "./compontents/IssueTable";
import BaseForm from "./compontents/BaseForm";
import TreeSelector from "./compontents/TreeSelector";
import TreeMenu from "./compontents/TreeMenu";
import LearnES6 from "./compontents/ES";
import MovieCards from "./compontents/MovieCards";

// Simple Protable from 官网
//ReactDOM.render(<IssueTable />, document.getElementById("root")); //

// Simple Input demo from gov
// ReactDOM.render(<BaseForm />, document.getElementById("root"));

// Simple TreeSelector demo from gov
// ReactDOM.render(<TreeSelector />, document.getElementById("root"));

// Simple TreeMenu demo from gov
// ReactDOM.render(<TreeMenu />, document.getElementById("root"));

// ES6 crash course
// ReactDOM.render(<LearnES6 />, document.getElementById("root"));

// Using axios to fetch data
ReactDOM.render(<MovieCards />, document.getElementById("root"));

serviceWorker.unregister();
