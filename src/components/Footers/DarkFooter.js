/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

function DarkFooter() {

  const openTwitter = ()=>{
    window.open('https://www.linkedin.com/company/vaidik-technologies-pvt-ltd/?originalSubdomain=in','_blank');
  }
  const openFacebook = ()=>{
    window.open('https://www.facebook.com/vaidik.tech','_blank');
  }
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div style={{float:'right'}}>
        <a className="ml-4" href='#linkedin' onClick={openTwitter}>
						<i className="fab fa-linkedin"></i>
						<p className="d-lg-none d-xl-none">Twitter</p>
					</a>
          <a className="ml-4" href="#facebook" onClick={openFacebook}>
						<i className="fab fa-facebook-square"></i>
						<p className="d-lg-none d-xl-none">Facebook</p>
					</a>
        </div>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#pogo"
          >
            Team Vaidik
          </a>
          . Copyright by{" "}
          <a
            href="#copyright"
          >
            Vaidik Technologies Pvt. Ltd.
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
