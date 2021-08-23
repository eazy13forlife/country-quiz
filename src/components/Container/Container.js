import React from "react";

import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="Container">
      <div className="Container__content-wrap">{children[0]}</div>
      {children[1]}
    </div>
  );
};

export default Container;
