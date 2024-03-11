import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import Benefits from "./components/BenefitsSection/Benefits";
import Programs from "./components/ProgramsSection/Programs";
import IndividualCourse from "./components/IndividualCourseSection/IndividualCourse";
import IndividualBenefits from "./components/IndividualCourseBenefits/IndividualCourseBenefits";
import GroupCourse from "./components/GroupCourseSection/GroupCourse";
import GroupBenefits from "./components/GroupCourseBenefits/GroupBenefits";
import BusinessCourse from "./components/BusinessCourseSection/BusinessCourse";

function App() {
  return (
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
    </div>
  );
}

export default App;
