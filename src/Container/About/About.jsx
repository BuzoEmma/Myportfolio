import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap1, MotionWrap } from "../../Wrapper";
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h3>
        I am an instructor, teacher, adversary and conference speaker who has a
        profile knowledge of front-end software development (Javascript,
        Reactjs, Nextjs, HTML, CSS, etc). A certified Microsoft trainer with
        exceptional knowledge of Ms Office, sound knowledge of blockchain
        (Decentralisation)and a content creator with practical experience in the
        industry. Currently, I'm an instructor in the area of Basic ICT
        and programming with a renowned NGO (Meez Empowerment initiative).
        Presently occupying the position of mentor in reactjs at
        Techathon, an ICT syndicate and aspiring to greater
        responsibility in other ICT-related areas.
      </h3>
      <br />
      <h2 className="head-text">
        I Know That <span>Good Experience</span>
        <br />
        Means <span>Good Development.</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap1(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
