import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import KlookDealsWidget from "../Components/KlookDealsWidget";
import KlookAffiliateWidgetSearch from "../Components/SearchHote";

const HotePage = () => {
  return (
    <>
      <NavBar />
      <KlookAffiliateWidgetSearch></KlookAffiliateWidgetSearch>
      <Footer></Footer>
    </>
  );
};

export default HotePage;
