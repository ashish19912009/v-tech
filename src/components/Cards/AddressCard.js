import React from "react";
// reactstrap components
import{
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

const AddressCard = (props) => {
  return (
    <Card style={{ width: "100%" }}>
    <CardBody> 
      <CardTitle tag="h2">Current Address</CardTitle>
      <br/>
      <div style={{textAlign:'left'}}>
        <h6><span><i className="now-ui-icons ui-1_calendar-60 mr-2"></i></span>{props.address_1}</h6>
        <h6><span><i className="mr-4"></i></span>{props.address_2}</h6>
        <h6><span><i className="mr-4"></i></span>{props.city}, {props.state}, {props.pincode}</h6>
        <br/>
        <h6><span><i className="now-ui-icons tech_mobile mr-2"></i></span>{props.primary_mob}, {props.secondary_mob}</h6>
        <h6><span><i className="now-ui-icons ui-1_email-85 mr-2"></i></span>{props.email}</h6>   
        <h6><span><i className="now-ui-icons ui-2_time-alarm mr-2"></i></span>{props.wrk_hrs}</h6>  
      </div>      
    </CardBody>
  </Card>
  );
};

export default AddressCard;
