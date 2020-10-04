import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import HeroPage from "./HeroPage/HeroPage";
import ClientsOpinionSection from "./ClientsOpinionSection/ClientsOpinionSection";
import TecSection from "./TecSection/TecSection.js";
import FindUsSection from "./FindUsSection/FindUsSection";
import Footer from "./Footer/Footer";
const MainPage = () => (
  <>
    <HeroPage />
    <AboutSection />
    <ClientsOpinionSection />
    <TecSection />
    <FindUsSection />
    <Footer />
  </>
);

export default MainPage;
