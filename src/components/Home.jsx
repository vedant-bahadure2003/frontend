import React from "react";
import Card from "./Card";
import Mentors from "./Mentors";
import Boxes from "./Boxes";
import HorizontalCard from "./HorizontalCard";
import Award from "./Award";

import Footer from "./Footer.jsx";
import CustomerSupport from "./CustomerSupport.jsx";
import Navbar from "./Header.jsx";
import Main from "./Main.jsx";
import Join from "./Join.jsx";
import Hmhm from "./Hmhm.jsx";

import Hui from "./Hui.jsx";
import Meow from "./Meow.jsx";

import Poster from "./Poster.jsx";
import Ads from "./Ads.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Boxes />
      <HorizontalCard />
      <Award />
      <Meow />
      <Hui />
      <Hmhm />
      <Mentors />
      <Card />
      <Join />
      <CustomerSupport />

      <Footer />
    </>
  );
};

export default Home;
