import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class CollegePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      page: {}
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/college_page.json?slug=${this.props.match.params.id}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            page: result
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
    const { error, isLoaded, page } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // CSS crap - this is so lame
      const rowLogoStyle = {
        backgroundColor: page.site_top_banner_color,
        // TODO: move this to some generalized CSS file
        height: '200px',
        textAlign: 'center'
      };
      const logoStyle = {
      }
      const rowSpacerStyle = {
        backgroundColor: page.site_top_bar_color
      }
      const rowBodyStyle = {
      }
      const rowBottomStyle = {
        backgroundColor: page.site_bottom_banner_color
      }

      /*
       * more on layouts in bootstrap
       * https://react-bootstrap.github.io/layout/grid/
       */
      return (
        <div>
        <Container fluid>
          <Row style={rowLogoStyle}>
            <Col>
              <div style={logoStyle}>
                <img alt={page.name} src={page.site_logo_source_url} />
              </div>
            </Col>
          </Row>
          <Row style={rowSpacerStyle}>
            <Col>&nbsp;</Col>
          </Row>
          <Row style={rowBodyStyle}>
            <Col>&nbsp;</Col>
            <Col xs={6}>
              <div>
                <h2>CONGRATS!!</h2>
                <p>You've been accepted to {page.name}! You now have access to
          our private TODO:Class-of Group and other exclusive chats on ZeeMee
          where you can: </p>
                <ul>
                  <li>Meet and chat with other accepted students</li>
                  <li>Take the Roommate Match Quiz</li>
                  <li>See daily life on campus from current students</li>
                </ul>
                <p>If you haven't already joined, just click the links below to
          install the app.</p>
              </div>
            </Col>
            <Col>&nbsp;</Col>
          </Row>
          <Row style={rowBottomStyle}>
            <Col>&nbsp;</Col>
          </Row>
        </Container>
        <hr/>
        <h2>Data for debugging</h2>
        <h1>College Page</h1>
        <h2>{this.props.match.params.id}</h2>
        <ul>
          {Object.keys(page).map(key => (
            <li key={key}>
              {key}: {page[key]}
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}

export default CollegePage;
