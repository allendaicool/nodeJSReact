// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./semantic/dist/semantic.min.css";
import Button from '@material-ui/core/Button';
import Blog from './Blog';

ReactDOM.render(
  <Blog/>,
  document.getElementById("root") // eslint-disable-line no-undef
);
