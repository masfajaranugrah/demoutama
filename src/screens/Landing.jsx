import React, { useEffect, lazy } from "react";
import { useLocation } from 'react-router-dom';

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
// import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Footer from "../components/Sections/Footer";
const Services = lazy(() => import('../components/Sections/Services'));

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const element = document.querySelector(`[id="${path.slice(1)}"]`);
    if (element) {
      const headerOffset = 70; // Adjust this value to match your fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <>
      <TopNavbar />
      <Header id="home"/>
      <Services id="services"/>
      <Projects id="demo"/>
      <Footer />
    </>
  );
}
