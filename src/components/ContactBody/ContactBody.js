import React,{useState,useEffect} from 'react';
import Section from '../Section/Section';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import {Row, Col} from 'reactstrap';
import AddressCard from '../../components/Cards/AddressCard';
import axios from 'axios';
import axInstance from '../../connection/axiosConn';

const ContactBody = () => {
    const [completeAddress, setUpdateAddress] = useState([
        {
          address1: '658/14, LANE 13',
          address2: 'VIJAY PARK EXTENSION',
          city: 'DEHRADUN',
          state: 'UTTRAKHAND',
          contact_1: 7088669991,
          contact_2: 8971489349,
          email: 'reachus@vaidiktechnologies.com',
          pincode: 248001,
          wrk_hrs: '9:00 AM - 6:00PM'
        }
      ]);

      useEffect(() => {
        const showData = {...completeAddress};
        axios.get(`${axInstance}/getAddress/`)
         .then(res => {
           if(res.status === 200)
           {
            const newData = res.data.map((el)=>{
                delete el._id; delete el.createdAt; delete el.updatedAt;
                return el; 
              });
            
            showData[0].address1 = newData[0].address1;
            showData[0].address2 = newData[0].address2;
            showData[0].city = newData[0].city;
            showData[0].state = newData[0].state;
            showData[0].contact_1 = newData[0].mobile_1;
            showData[0].contact_2 = newData[0].mobile_2;
            showData[0].pincode = newData[0].pincode;
            showData[0].email = newData[0].email;
            showData[0].wrk_hrs = newData[0].working_hrs;
            setUpdateAddress(showData);
           }
         })
         .catch(err => {
           console.log(err);
         });  
      },[]);  
  
    return(
        <>
            <Section bgColor='transparent'>
           <Col><h1 className='title'>Contact Us</h1></Col>
            <Row>
                <Col xs={12} sm={8} style={{color:'black'}}>
                    <ContactUsForm/>
                </Col>
                <Col xs={12} sm={4} style={{color:'#000000'}}>
                <AddressCard address_1={completeAddress[0].address1} address_2={completeAddress[0].address2} city={completeAddress[0].city} state={completeAddress[0].state} pincode={completeAddress[0].pincode} primary_mob={completeAddress[0].contact_1} secondary_mob={completeAddress[0].contact_2} email={completeAddress[0].email} wrk_hrs={completeAddress[0].wrk_hrs}/> 
                </Col>
            </Row>
        </Section>
        </>
    );
}

export default ContactBody;