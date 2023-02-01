import React from "react";
import { useState, useEffect } from "react";
import "./Works.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap1 } from "../../Wrapper";
import { urlFor, client } from "../../client";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [workForce, setWorkForce] = useState({});
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data) => {
      setWorkForce(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (items) => {
    setActiveFilter(items);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      if (items === "All") {
        setFilterWork(workForce);
      } else {
        setFilterWork(workForce.filter((work) => work.tags.includes(items)));
      }
    }, 500);
  };
  return (
    <>
      <div className="works">
        <h2 className="head-text">
          My creative <span>Portfolio</span>
          <br />
          <span>Section. </span>
        </h2>
        <div className="app__work-filter">
          {["UI/UX", "Web App", "Mobile App", "ReactJS", "NextJS", "All"].map(
            (item, index) => (
              <div
                key={item + index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__Flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div key={index} className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text ">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap1(Works, "Works", "app__primarybg");
