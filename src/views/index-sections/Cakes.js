/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import cake1 from "../../assets/img/cakes/cake1.jpg";
import cake2 from "../../assets/img/cakes/cake2.jpg";
import cake3 from "../../assets/img/cakes/cake3.jpg";
import cake4 from "../../assets/img/cakes/cake4.jpg";
import cake5 from "../../assets/img/cakes/cake5.jpg";
import cake6 from "../../assets/img/cakes/cake6.jpg";
import cake7 from "../../assets/img/cakes/cake7.jpg";
import plumcake from "../../assets/img/cakes/plumcake.jpg";
// reactstrap components
import {
//   Card,
  Container,
  Row,
  Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CarouselCaption
} from "reactstrap";

// core components

// const items = [
//   {
//     src: require("assets/img/soroush-karimi.jpg"),
//     altText: "Somewhere",
//     caption: "Somewhere"
//   },
//   {
//     src: require("assets/img/federico-beccari.jpg"),
//     altText: "Somewhere else",
//     caption: "Somewhere else"
//   },
//   {
//     src: require("assets/img/joshua-stannard.jpg"),
//     altText: "Here it is",
//     caption: "Here it is"
//   }
// ];

function Cakes() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = newIndex => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
        <div className="title">
            <h2>Cakes</h2>
          </div>
          <br />
          <Row>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake1} style={{ width: 300, height: 300 }} alt="cake1"/>
            </Col>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake2} style={{ width: 300, height: 300 }} alt="cake2"/>
            </Col>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake3} style={{ width: 300, height: 300}} alt="cake3"/>
            </Col>
          </Row>
          </Container>
          <br></br>
          <br></br>
          <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake4} style={{ width: 300, height: 300 }} alt="cake4"/>
            </Col>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake5} style={{ width: 300, height: 300 }} alt="cake5"/>
            </Col>
            <Col className="ml-auto mr-auto" md="2">
            <img src={cake6} style={{ width: 300, height: 300}} alt="cake6"/>
            </Col>
          </Row>
        </Container>
        <br></br>
          <br></br>
          <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="4" >
            <img src={cake7} style={{ width: 300, height: 300 }} alt="cake7"/>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
            
            <img src={plumcake} style={{ width: 300, height: 300 }} alt="pulmcake"/>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Cakes;
