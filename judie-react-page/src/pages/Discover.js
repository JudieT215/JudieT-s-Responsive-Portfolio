import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

const Discover = () => (
 
      <div>
        <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-12">
          <Card/>

          </Col>
        </Row>
      
        </Container >
 
      </div>
    );
  


export default Discover;
