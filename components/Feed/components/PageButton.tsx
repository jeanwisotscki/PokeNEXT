import React from "react";

export const PaginationButton = ({ text = "Button", floatRight = false }) => {
  return (
    <button style={{ float: floatRight ? "right" : "left" }}>{text}</button>
  );
};
