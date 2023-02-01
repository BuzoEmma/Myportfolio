import React from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import { AppWrap1, MotionWrap } from "../../Wrapper";

const Testimonials = () => {
  const [Brands, setBrands] = useState([]);
  const [Testimonials, setTestimonials] = useState([]);
  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = `*[_type == "testimonials"]`;
    const brandskillQuery = `*[_type == "brands"]`;

    client
      .fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(err);
      });

    client
      .fetch(brandskillQuery)
      .then((expo) => {
        setBrands(expo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const text = Testimonials[CurrentIndex];
  return (
    <>
      <motion.div className="app__testimonial-div">
        <div>
          {Testimonials.length && (
            <>
              <div className="app__testimonial-item app__flex">
                <img src={urlFor(text.imgurl)} alt="testiominals" />
                <div className="app__testimonials-content">
                  <p className="p-text">{text.feedback}</p>
                  <div>
                    <h4 className="bold-text">{text.name}</h4>
                    <h5 className="p-text">{text.company}</h5>
                  </div>
                </div>
              </div>
              <div className="app__testimonials-btns app-flex">
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      CurrentIndex === 0
                        ? Testimonials.length - 1
                        : CurrentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      CurrentIndex === Testimonials.length - 1
                        ? 0
                        : CurrentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="app__testimonials-brands">
          {Brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap1(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
