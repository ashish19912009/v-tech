/*eslint-disable*/
import React from "react";
import conactBody from '../ContactBody/ContactBody';

// reactstrap components
import { Container,Button } from "reactstrap";
import ContactBody from "../ContactBody/ContactBody";
import { useScrollBy } from "react-use-window-scroll";

// core components

const IndexHeader = (props) => {
  let pageHeader = React.createRef();
  const scrollBy = useScrollBy();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const moveToService = () => {
    console.log("moveto")
    window.scrollTo(500, 0);
  }

  let divImg = null, boxTitle = null, boxSubTitle = null, centerContent = null;
  let bgColor = null;
  boxTitle = props.boxTitle;
  boxSubTitle = props.boxSubTitle;
  bgColor = null;

  centerContent =(<><img alt="..." className="n-logo" src={require("assets/img/logox64.png")}></img>
                    <h1 className="h1-seo">{boxTitle}</h1>
                    <h3>{boxSubTitle}</h3>
                    <Button className="btn-round" color="warning" style={{fontWeight:'bold',backgroundColor:`${bgColor}`}} outline onClick={() => scrollBy(900, 0)}><i className="fa fa-heart px-2"/>Explore Services</Button>
                  </>);
  
  if(props.imgType === 'indexPage')
  {
    divImg = (<div className="page-header-image" style={{backgroundImage: "url(" + require("assets/img/header-next.jpg") + ")"}} ref={pageHeader}></div>);
  }
   else if(props.imgType === 'aboutUs')
   {
    divImg = (<div className="page-header-image" style={{backgroundImage: "url(" + require("assets/img/aboutUs.jpg") + ")"}} ref={pageHeader}></div>); 
   }
   else
   {
    divImg = (<div className="page-header-image" style={{backgroundColor:'#CCCCCC'}} ref={pageHeader}></div>); 
    centerContent = (<ContactBody type='contactBody'/>);
   }

   let clsName = null;
   {props.imgType !=='contactUs' ? clsName="content-center brand" : clsName=null}
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        {divImg}
        <Container>
          <div className={clsName}>
          {centerContent}
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
