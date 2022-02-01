import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import IndexHeader from "../../components/Headers/IndexHeader";
import DarkFooter from "../../components/Footers/DarkFooter";
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import JourneySection from '../../components/Journey/JourneySection';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactUsForm/ContactUsForm';

const AboutUs = () => {
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
    return(
        <>
        <IndexNavbar/>
            <div className="wrapper">
                <IndexHeader imgType="aboutUs" boxTitle='Who we are ?' boxSubTitle='A young group of enthusiastic leaders!'/>
                    <div className="main">
                        <AboutUsSection/>
                        <JourneySection/>
                        <Section bgColor='#212f3c'>
                            <h2 className="title text-center" style={{color:'#CCCCCC'}}>Want to Know More ?</h2>
                            <h3 className='subtitle text-center' style={{color:'#CCCCCC'}}>Contact Us</h3>
                            <ContactForm/>
                        </Section>
                    </div>
                <DarkFooter/>
            </div>
        </>    
    );
}

export default AboutUs;