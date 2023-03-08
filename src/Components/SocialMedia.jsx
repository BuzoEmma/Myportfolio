import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "../App.scss";

const SocialMedia = () => {
  return (
    <>
      <div className="app__social">
        <div>
          <a
            href="https://twitter.com/Buzo_Official?t=1U7tNmPwiCuUfgz3-Y2CiA&s=09"
            target={"_blank"}
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/BuzoEmma?tab=repositories"
            target={"_blank"}
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/chibuzo-emmanuel-791b24231"
            target={"_blank"}
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
