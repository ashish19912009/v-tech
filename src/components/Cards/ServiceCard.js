import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

const ServiceCard = (props) => {
  return (
    <Card style={{ width: "25rem", height: "40rem"}}>
    <CardImg alt="..." src={props.imgSrc} top></CardImg>
    <CardBody> 
        {/* `./img/${img.code}.jpg`  "" */}
      <CardTitle tag="h4">{props.title}</CardTitle>
      <CardText>{props.cardTitle}</CardText>
    </CardBody>
  </Card>
  );
};

export default ServiceCard;
