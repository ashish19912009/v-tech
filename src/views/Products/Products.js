import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import Section from '../../components/Section/Section';
import './Products.module.css';
import {Container, Row, Col, Button} from 'reactstrap';
import ImgSrc from '../../assets/img/smartDevice.png';
import ImgSrc2 from '../../assets/img/tSave.png';

const Projects = () => {
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
            <div className="page-header clear-filter" style={{clipPath:'polygon(0 0,100% 0,100% 100%,0 calc(100% - 7vw)',backgroundImage:'linear-gradient(#ff9d2f, #ff6126)', paddingBottom:'0', height:'auto'}}>
            <header style={{paddingTop:'7%'}}>
                        <Section bgColor='transparent'>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <Row>
                                        <h1 className='title text-left'>Vaidik Smart Device</h1>
                                    <p className='text-left'>
                                        <strong>Wi-Fi enabled smart switch: Control your fan and other home appliances on a Wi-Fi connection.</strong>
                                    </p>
                                    <p className='text-left'>
                                        <strong>Control from anywhere with KIOT mobile app: Operate all appliances connected to the smart switch from anywhere in the world. Switch them on/off, create schedules and auto-turn off timers.</strong>
                                    </p>
                                    <p>
                                    <Button className="btn-round" style={{backgroundImage:'linear-gradient(135deg,#bb8fce ,#4a235a)'}}>Know More</Button>
                                    </p>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <img className='' src={ImgSrc} alt=''/>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                    </header>  
            </div>
            <div style={{backgroundImage:'linear-gradient(135deg,  #eaeded  , #154360 )',marginTop:'-7vw', paddingTop:'7%'}}>
            <Section bgColor='transparent'>
                            <Container style={{}}>
                                <Row>
                                    <Col xs={12} sm={6} className='text-left' style={{display:'flex'}}>
                                        <img className='' src={ImgSrc2} alt='' style={{margin:'auto'}}/>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Row style={{paddingLeft:'20px'}}>
                                        <h1 className='title text-left'>True Saviour</h1>
                                    <p className='text-left'>
                                        <strong>A place where you can get the support and attention that you need. Get online counselling from professionals and keep track of your mental and emotional wellness. </strong>
                                    </p>
                                    <p className='text-left'>
                                        <strong>It also helps determine how we handle stress, relate to others, and make choices. It is important at every stage of life, from childhood and adolescence through adulthood.</strong>
                                    </p>
                                    <p>
                                    <Button className="btn-round" style={{backgroundImage:'linear-gradient(135deg,#bb8fce ,#4a235a)'}}>Know More</Button>
                                    <Button className="btn-round ml-2" color="info" outline><a href='#polo' style={{color:'white'}}>Check Now</a></Button>
                                    </p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
            </div>   
        <DarkFooter/>    
        </>    
    );
}

export default Projects;