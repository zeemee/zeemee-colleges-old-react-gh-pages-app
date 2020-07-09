import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class CaseStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/case_studies.json`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <h1>Case Studies</h1>
            <Row>
              {items.map(item => (
                <Col>
                  <Card key={item.name} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.logo} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button
                        variant="primary"
                        href={item.url}>View Case Study</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <hr/>
          <h2>Data for debugging/dev</h2>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name}
                <ul>
                  {Object.keys(item).map(key => (
                    <li key={key}>
                      {key}: {item[key]}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default CaseStudies;
