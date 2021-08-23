import React from "react";

import { myName, githubUrl } from "../../myName";
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
        -devChallenges.io
      </p>
    </div>
  );
};

export default Footer;
