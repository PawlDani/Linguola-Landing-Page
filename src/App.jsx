import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import Benefits from "./components/BenefitsSection/Benefits";
import Programs from "./components/ProgramsSection/Programs";
import IndividualCourse from "./components/IndividualCourseSection/IndividualCourse";
import IndividualBenefits from "./components/IndividualCourseBenefits/IndividualCourseBenefits";
import GroupCourse from "./components/GroupCourseSection/GroupCourse";
import GroupBenefits from "./components/GroupCourseBenefits/GroupBenefits";
import BusinessCourse from "./components/BusinessCourseSection/BusinessCourse";
import BusinessBenefits from "./components/BusinessCourseBenefits/BusinessBenefits";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Programs />
      <IndividualCourse />
      <IndividualBenefits />
      <GroupCourse />
      <GroupBenefits />
      <BusinessCourse />
      <BusinessBenefits />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
