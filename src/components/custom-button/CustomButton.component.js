import React from "react";
import "./CustomButton.style.scss"
const CustomButtom = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButtom;
