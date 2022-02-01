/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Row,Col } from "reactstrap";
import bgImg from '../../assets/img/bg7.jpg';
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import{
    Card,
    CardBody
  } from "reactstrap";

const items = [
    {
        id: 1,
      clientName: "Ashish",
      clientDesg:'CEO, Deskhelp',      
      clientMsg: "They are the best"
    },
    {
        id: 2,
      clientName: "Somnath Mondal",
      clientDesg:'H.O, Nagarnigam',      
      clientMsg: "Somewhere Beyond, United States"
    },
    {
        id: 3,
      clientName: "Charu Hashi Rena",
      clientDesg:'M.D, SpeedAir',      
      clientMsg: "Yellowstone National Park, United States"
    }
  ];
function ClientReviews () {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    
      
  return (
    <div className="section section-nucleo-icons" style={{backgroundImage:`url(${bgImg})`}}>
          <Container>
          <h2 className="title text-center">What People think about Us</h2>
          <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{backgroundColor:'#F9F9F9'}}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.id}
            >
            <Card style={{ minWidth: "80%" }}>
                <CardBody>
                  <blockquote className="blockquote blockquote-primary mb-0">
                    <p>{item.clientMsg}</p>
                    <footer className="blockquote-footer">
                      {item.clientName} <cite title="Source Title">{item.clientDesg}</cite>
                    </footer>
                  </blockquote>
                </CardBody>
            </Card>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
          </Container>
      </div>
  );
}

export default ClientReviews;
