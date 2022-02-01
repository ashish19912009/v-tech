import React from 'react';
import AdminNavbar from "../../components/NavbarAdmin/NavbarAdmin";
import {Col, Row} from 'reactstrap';
import DarkFooter from "../../components/Footers/DarkFooter";
import Section from '../../components/Section/Section';

const AdminHome = () => {
    return(
        <>
            <AdminNavbar/>
            <div className="wrapper">
                <div className="main">
                    <Section>
                      <Col>
                        <Row>
                            <h1 className='title'>Inner Admin Home Tag</h1>   
                        </Row>
                      </Col>  
                    </Section>
                </div>
              <DarkFooter/>
            </div>
        </>
    );
};
export default AdminHome;