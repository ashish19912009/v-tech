import React from "react";
// reactstrap components
import {Container, Row, Col} from 'reactstrap';
import AchvCard from '../Cards/AchievementCard';

const JourneySection = () => {
    return (
      <>
      <div className="section section-nucleo-icons" style={{backgroundColor:'#4a235a'}}>
          <Container>
          <h2 className="title text-center" style={{color:'white'}}>Our Journey</h2>
          <br/>
            <Row>
            <Col xs={12} sm={6}>
                  <AchvCard/>
            </Col>
                <Col xs={12} sm={6}>
                    <h5 className="description" style={{color:'white'}}>
		    					Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
		    		</h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12} sm={6}>
                    <h5 className="description" style={{color:'white'}}>
		    					Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
		    		</h5>
                </Col>
                <Col xs={12} sm={6}>
                    <AchvCard/>
                </Col>
            </Row>
      </Container>
      </div>

        
      </>
    );
  }
  
  export default JourneySection;