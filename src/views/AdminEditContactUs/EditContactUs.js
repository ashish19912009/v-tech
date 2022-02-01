import React,{useState,useEffect} from 'react';
import AdminNavbar from "../../components/NavbarAdmin/NavbarAdmin";
import {Col, Row, Form, FormGroup, Input, Button} from 'reactstrap';
import DarkFooter from "../../components/Footers/DarkFooter";
import Section from '../../components/Section/Section';
import AddressCard from '../../components/Cards/AddressCard';

const EditContactUs = () => {


  const [completeAddress, setUpdateAddress] = useState([
    {
      address1: '',
      address2: '',
      city: '',
      state: '',
      contact_1: 0,
      contact_2: 0,
      email: '',
      pincode: 0,
      wrk_hrs: ''
    }
  ]);


const  onContactFormSubmit = (e) => {
    e.preventDefault();
    const newAddress = {...completeAddress};

    newAddress[0].address1 = document.getElementById('add1').value;
    newAddress[0].address2 = document.getElementById('add2').value;
    newAddress[0].city = document.getElementById('city').value;
    newAddress[0].state = document.getElementById('state').value;
    newAddress[0].contact_1 = document.getElementById('mob_1').value;
    newAddress[0].contact_2 = document.getElementById('mob_2').value;
    newAddress[0].email = document.getElementById('email').value;
    newAddress[0].pincode = document.getElementById('pincode').value;
    newAddress[0].wrk_hrs = document.getElementById('wrk_hrs').value;

  }


    return(
        <>
            <AdminNavbar/>
            <div className="wrapper">
                <div className="main">
                    <Section>
                      <br/>
                      <br/>
                      <Col>
                        <Row>
                            <Col xs={12} sm={5}>
                              <AddressCard address_1={completeAddress[0].address1} address_2={completeAddress[0].address2} city={completeAddress[0].city} state={completeAddress[0].state} pincode={completeAddress[0].pincode} primary_mob={completeAddress[0].contact_1} secondary_mob={completeAddress[0].contact_2} email={completeAddress[0].email} wrk_hrs={completeAddress[0].wrk_hrs}/>
                            </Col>
                            <Col xs={12} sm={7} style={{paddingLeft:'20px'}}>
                              <Row>
                              <h3 className='subtitle'>Update Address</h3>
                              </Row>
                              <Row>
                                <Form onSubmit={onContactFormSubmit}>
                                    <div className="form-row">
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="add1">Address Line 1 *</label>
                                        <Input id="add1" placeholder="Address" type="text" required></Input>
                                      </FormGroup>
                                      <FormGroup className="col-md-6">
                                      <label htmlFor="add2">Address Line 2 *</label>
                                        <Input id="add2" placeholder="Address" type="text" required></Input>
                                      </FormGroup>
                                    </div>
                                    <div className="form-row">
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="city">City *</label>
                                        <Input id="city" placeholder="City" type="text" required></Input>
                                      </FormGroup>
                                      <FormGroup className="col-md-6">
                                      <label htmlFor="state">State *</label>
                                        <Input id="state" placeholder="State" type="text" required></Input>
                                      </FormGroup>
                                    </div>
                                    <div className="form-row">
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="mob_1">Contact No (Primary) *</label>
                                        <Input id="mob_1" placeholder="Mobile" type="number" required></Input>
                                      </FormGroup>
                                      <FormGroup className="col-md-6">
                                      <label htmlFor="mob_2">Contact No (Alt) *</label>
                                        <Input id="mob_2" placeholder="Mobile" type="number" required></Input>
                                      </FormGroup>
                                    </div>
                                    <div className="form-row">
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="mob_1">Email ID*</label>
                                        <Input id="email" placeholder="Email" type="email" required></Input>
                                      </FormGroup>
                                    </div>
                                    <div className="form-row">
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="pincode">Pincode *</label>
                                        <Input id="pincode" placeholder="Pin Code" type="number" required></Input>
                                      </FormGroup>
                                      <FormGroup className="col-md-6">
                                        <label htmlFor="wrk_hrs">Working Hours *</label>
                                        <Input id="wrk_hrs" placeholder="Working Hours" type="text" required></Input>
                                      </FormGroup>
                                    </div> 
                                    <Button color="primary" type="submit">
                                      Update
                                    </Button>
                                </Form>
                              </Row>
                            </Col>
                               
                        </Row>
                      </Col>  
                    </Section>
                </div>
              <DarkFooter/>
            </div>
        </>
    );
};
export default EditContactUs;