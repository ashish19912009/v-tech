import React,{useState} from 'react';
import{
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Button,
    Label
   } from "reactstrap";

const ContactUsForm = (props) => {

    const [EmailVariable,sendEmailUpdate] = useState([
      {
        EmailSend: false
      }
    ]);

    const sendEmail = (e) => {
      e.preventDefault(); 
      setTimeout(()=>{
        sendEmailUpdate([{EmailSend:true}]);
      },1000);
    }
    const emailForm = (<Form onSubmit={sendEmail}>
      <div className="form-row">
        <FormGroup className="col-md-6">
          <label htmlFor="inputName">Name *</label>
          <Input id="inputEmail4" placeholder="Name" type="text" required></Input>
        </FormGroup>
        <FormGroup className="col-md-6">
        <label htmlFor="inputEmail">Email *</label>
          <Input id="inputEmail4" placeholder="Email" type="email" required></Input>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup className="col-md-6">
          <label htmlFor="inputEmail4">Mobile</label>
          <Input id="inputMobile" placeholder="Mobile No" type="number"></Input>
        </FormGroup>
        <FormGroup className="col-md-6" check>
          <br/>
          <Label className='ml-2' check>
            <Input type="checkbox"></Input>
            <span className="form-check-sign"></span>
            Contact me directly on mobile.
          </Label>
        </FormGroup>
      </div>  
      <div className="form-row">
        <FormGroup className="col-md-12">
          <label htmlFor="inputCity">Qurey</label>
          <Input id="inputQuery" placeholder="Query" type="text" required></Input>
        </FormGroup>
      </div>
      <Button color="primary" type="submit">
        Send
      </Button>
  </Form>);
  const emailSend = (<div className="alert alert-success" role="alert">
  <div className="container">
    <div className="alert-icon">
      <i className="now-ui-icons ui-2_like"></i>
    </div>
    <strong>Email Send!</strong> We will reach you soon!
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
        <i className="now-ui-icons ui-1_simple-remove"></i>
      </span>
    </button>
  </div>
</div>);
    return(<>
            <Card>
                <CardBody>
                  {!EmailVariable[0].EmailSend ? emailForm : emailSend}
                </CardBody>
            </Card>
        </>);
}

export default ContactUsForm;