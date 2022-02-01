import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import LogoBig from '../Logo/LogoBig/LogoBig';

const AboutUsSection = (props) => {
  return (
      <div className="section section-nucleo-icons" style={{backgroundColor:'#F9F9F9'}}>
          <Container>
            <Row>
            <Col xs={12} sm={4}>
                  <LogoBig/>
                </Col>
                <Col xs={12} sm={8}>
                    <h2 className="title">Vaidik Technologies</h2>
                    <br/>
                    <h5 className="description">
		    					Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
                                Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
                                Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
		    		</h5>
                </Col>
                
            </Row>
      </Container>
      </div>
  );
};

export default AboutUsSection;