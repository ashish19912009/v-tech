import React from 'react';
import {Container, Row,Col} from 'reactstrap';

const PageSection = (props) => {
  return (
    <section className="section section-nucleo-icons" style={{backgroundColor:`${props.color}`}}>
      <Container fluid>
        <Row>
          <Col>
          <h2 className="title text-center">{props.containerHeading}</h2>
          </Col>
        </Row>
        <Row>
        {props.children}
        </Row>
      </Container>
    </section>
  );
};

export default PageSection;
