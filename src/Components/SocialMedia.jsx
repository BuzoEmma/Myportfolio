import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import "../App.scss"

const SocialMedia = () => {
  return (
    <>
      <div className="app__social">
        <div>
          <BsTwitter />
        </div>
        <div>
          <FaFacebook />
        </div>
        <div>
          <BsGithub />
        </div>
        <div>
          <BsLinkedin />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
