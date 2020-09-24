import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import * as serviceWorker from "./serviceWorker";
import IssueTable from "./compontents/IssueTable";
import BaseForm from "./compontents/BaseForm";
import TreeSelector from "./compontents/TreeSelector";
import TreeMenu from "./compontents/TreeMenu";

// Simple Protable from 官网
//ReactDOM.render(<IssueTable />, document.getElementById("root")); //

// Simple Input demo from gov
ReactDOM.render(<BaseForm />, document.getElementById("root"));

// Simple TreeSelector demo from gov
// ReactDOM.render(<TreeSelector />, document.getElementById("root"));

// Simple TreeMenu demo from gov
// ReactDOM.render(<TreeMenu />, document.getElementById("root"));

serviceWorker.unregister();
