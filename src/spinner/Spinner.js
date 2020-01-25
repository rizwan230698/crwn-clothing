import React from "react";
import "./Spinner.scss";
const spinner = ({ className, text }) => (
  <div className={`${className} wrapper`}>
    <div className="loading-spinner"></div>
    <span className="text">{text}</span>
  </div>
);
export default spinner;
