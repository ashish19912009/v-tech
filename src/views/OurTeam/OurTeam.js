import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import Section from '../../components/Section/Section';

import {Row, Col, Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink,
    CardText,} from 'reactstrap';


const OurTeam = () => {

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
        <div className="page-header clear-filter" style={{backgroundImage:'linear-gradient( #82e0aa,  #1d8348)',paddingTop:'7%', height:'auto'}}>
            <Section bgColor='transparent'>
                <Row>
                    <Col>
                        <h1 className='title'>Our Team</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Card style={{color:'black'}}>
                            <CardBody>
                              <CardTitle tag="h4">Shivanshu Kumar Anand</CardTitle>
                              <CardSubtitle className="mb-2 text-muted">
                                CEO, Founder
                              </CardSubtitle>
                              <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </CardText>
                              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                Check Profile
                              </CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Card style={{color:'black'}}>
                            <CardBody>
                              <CardTitle tag="h4">Sohrab Malik</CardTitle>
                              <CardSubtitle className="mb-2 text-muted">
                                Web Designer
                              </CardSubtitle>
                              <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </CardText>
                              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                Check Profile
                              </CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col xs={12} sm={6}>
                        <Card style={{color:'black'}}>
                            <CardBody>
                              <CardTitle tag="h4">Shivanshu Kumar Anand</CardTitle>
                              <CardSubtitle className="mb-2 text-muted">
                                CEO, Founder
                              </CardSubtitle>
                              <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </CardText>
                              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                Check Profile
                              </CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Card style={{color:'black'}}>
                            <CardBody>
                              <CardTitle tag="h4">Sohrab Malik</CardTitle>
                              <CardSubtitle className="mb-2 text-muted">
                                Web Designer
                              </CardSubtitle>
                              <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </CardText>
                              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                Check Profile
                              </CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Section>
        </div>
        <DarkFooter/>
        </>
    );
}

export default OurTeam;