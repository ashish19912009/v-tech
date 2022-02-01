import React from "react";
// reactstrap components
import{
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";

function AchievementCard(props){
    return (
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h4">We registered as Pvt. Ltd.</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Badge color="primary">5 Years Ago</Badge>
          </CardBody>
        </Card>
    );
  }
  
  export default AchievementCard;