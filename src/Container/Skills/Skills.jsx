import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap1, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skill, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = `*[_type == "experiences"]`;
    const skillQuery = `*[_type == "skills"]`;

    client
      .fetch(query)
      .then((data) => {
        setExperience(data);
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });

    client
      .fetch(skillQuery)
      .then((expo) => {
        setSkills(expo);
        // console.log(expo.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 className="head-text-"> Skills & Experience </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((work, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={work + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "work.bgColor" }}
              >
                <img src={urlFor(work.icon)} alt={work.name} />
              </div>
              <p className="p-text">{work.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((work) => (
            <motion.div className="app__skills-exp-item" key={work.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{work.year}</p>
              </div>

              <motion.div className="app__skills-expo-works">
                {work.works.map((items) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={items.name}
                      key={items.name}
                    >
                      <h4 className="bold-text ">{items.name}</h4>
                      <p className="p-text">{items.company}</p>
                    </motion.div>
                    <div title={items.desc}>{items.desc}</div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap1(
  MotionWrap(Skills, "app__skill"),
  "Skills",
  "app__whitebg"
);
// background:  white !important;
// flex: 1;
// width: 100%;
// flex-direction: column;
