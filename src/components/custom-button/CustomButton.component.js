import React from "react";
import { CustomButtonContainer } from "./CustomButton.style";
const CustomButtom = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButtom;
