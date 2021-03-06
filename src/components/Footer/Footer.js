import React from "react";

import { myName, githubUrl } from "../../myName.js";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="text">
        created by{" "}
        <a
          target="_blank"
          className="Footer__link"
          href={githubUrl}
          rel="noreferrer"
        >
          {myName}
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
