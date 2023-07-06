import React, { useEffect } from "react";
import "./Footer.scss";
import { images } from "../../Constants";
import { client } from "../../client";
import { AppWrap1, MotionWrap } from "../../Wrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiX } from "react-icons/hi";

const date = new Date()
const year = date.getFullYear()



const Footer = () => {
  const data = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(data);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [Toggle, setToggle] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsFormSubmitted(true);
    setError(validateForm(formData));
    setFormData({ name: "", email: "", message: "" });

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setIsFormSubmitted(false);
    });
  };

  const validateForm = (value) => {
    const reget = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.name === "" || value.email === "" || value.message === "") {
      return <i className="footer__value">you need to validate all fields</i>;
    }

    if (value.email && !reget.test(value.email)) {
      return <i className="footer__value">invalid email address</i>;
    }
    return "";
  };

  return (
    <>
      <div className="app__footer-div">
        <h2 className="head-text">Take a coffe with me</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:chibuzoemma6@gmail.com" className="p-text">
              buzoemma@gmail.com
            </a>
          </div>
        
          <div className="app__footer-card">
            <img src={images.whatsapp} alt="mobile" />

            <a href="whatsapp://send?text=Hello, I would like us to talk about web development. I am ...... &phone=+2349065017716">
              chat me on whatsapp
            </a>
          </div>
        </div>
      </div>
      {
        <form action="form">
          <div className="app__footer-form app__flex">
            {Object.keys(Error).length === 0 && isFormSubmitted ? (
              <i className="pop"> Thank you for getting in tourch</i>
            ) : (
              ""
            )}
            {Error}
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                name="name"
                value={name}
                placeholder="your name"
                onChange={handleChangeInput}
                required
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                className="p-text"
                name="email"
                value={email}
                placeholder="your email"
                onChange={handleChangeInput}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                type="text"
                value={message}
                className="p-text"
                placeholder="your message"
                onChange={handleChangeInput}
                required
              />
            </div>
            <button type="submit" className="p-text" onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </form>
      }

      <div className="copyright">
        <p className="p-text">@{year} Buzo</p>
        <p className="pitext">All right resevered</p>
      </div>
    </>
  );
};

export default AppWrap1(
  MotionWrap(Footer, "app__footer"),
  "Footer",
  "app__whitebg"
);
