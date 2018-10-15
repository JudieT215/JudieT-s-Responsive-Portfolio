import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const About = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12" />
      </Row>
      <Row className="card w-80 h-75">
        <Col className="card-body" size="md-3">
          <img
            src={"./images/Judieprofile.jpg"}
            width="200"
            height="200"
            align="left"
          />
        </Col>
        <Col className="card-body" size="md-9" align="left">
          <p>
            My name is Judie. I am an aspiring web developer with a passion for
            healthcare and non-profits. I created this page in react to display
            some of my projects.
          </p>
          <p>
            I worked at Wills Eye Hospital for 3 years as a Program Coordinator for
            the Vision Screening program. This program provided vision screening
            and glasses for over 10,000 Philadelphia children. During my career,
            I have developed and maintained many relational databases to
            efficiently manage and retrieve information collected through
            various research studies. This information was then used to publish
            scientific articles. (Check Them Out)
          </p>
          <p>
            Then I transited into a Clinical Research Coordinator working on
            Phase 1-3 sponsor studies at University of Pennsylvania and Wills
            Eye Hospital.
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p />
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
