import React from 'react';
import {Container} from 'reactstrap';

const Section = (props) => {
    return(
        <div className="section section-nucleo-icons" style={{backgroundColor:`${props.bgColor}`}}>
          <Container>{props.children}</Container>
        </div>  
    );
}

export default Section;