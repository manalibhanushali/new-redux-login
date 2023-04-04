import React from "react";

export default ({ onClick, children }) => {
  const handleClick = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
};
