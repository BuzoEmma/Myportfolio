import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import { AppWrap1 } from "../../Wrapper";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              {/* <span>👋</span> */}
              <img src={images.emoji} alt="emoji" className="emoji" />
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am </p>
                <h1 className="head-text">Buzo</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web Development &</p>
              <p className="p-text"> Freelancer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.buzoImg2} alt="profle-bg" className="profile" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overlay-circle"
            src={images.circle}
            alt="profile-cirlce"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={index}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
        
        <div className="header__social">
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
      </div>
    </>
  );
};

export default AppWrap1(Header, "Home");
