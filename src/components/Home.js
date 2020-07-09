import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import MoreInfoForm from './MoreInfoForm';

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Home Page ZeeMee Colleges</h1>
        <MoreInfoForm/>
      </Container>
    );
  }
}

export default Home;
