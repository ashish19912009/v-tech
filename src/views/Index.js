import React from "react";
// reactstrap components
import { Col } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "../components/Headers/IndexHeader";
import DarkFooter from "../components/Footers/DarkFooter";

// sections for this page
import PageSection from '../components/PageSection/PageSection';
import ServiceCard from '../components/Cards/ServiceCard';
import WhyUsSection from '../components/WhyUsSection/WhyUsSection';
import TechSection from '../components/TechSection/TechSection';
import ClientReview from '../components/ClientReviews/ClinetReviews';

import WEB from '../assets/img/web-development.png';
import SOFT from '../assets/img/soft-development1.png';
import HOST from '../assets/img/hosting.png';

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader imgType="indexPage" boxTitle='Your Dream, Our Commitment.' boxSubTitle='Welcome to Vaidik Technologies Pvt. Ltd.'/>
        <div id='Services' className="main">
          <PageSection containerHeading='Services'>
            <Col><ServiceCard imgSrc={WEB} title='WEB/MOBILE' cardTitle='We have experience in building static as well as dynamic website and mobile application.'/></Col>
            <Col><ServiceCard imgSrc={SOFT} title='SOFTWARE DEVELOPMENT' cardTitle='We build custom software according to the requirment of client, and for multiple platforms.'/></Col>
            <Col><ServiceCard imgSrc={HOST} title='HOSTING' cardTitle='We also provide cheap and best hosting according to our customer requirement, we also help our customer to get best domain offers available.'/></Col>
          </PageSection>
          <WhyUsSection/>
          <TechSection/>
          <ClientReview/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
