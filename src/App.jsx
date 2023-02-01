import React from "react";
import "./App.scss";
import {
  Skills,
  Works,
  Testimonials,
  About,
  Footer,
  Header,
} from "./Container";
import { Navbar } from "./Components";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
