import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class MoreInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: null,
      success: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const url = `${process.env.REACT_APP_BASE_API_URL}/more_info.json`;

    const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.state.value })
    };

    fetch(url, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            success: true
          });
          alert("Thanks!");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            success: true,
            error
          });
        }
      )
      //.then(response => response.json());
      //.then(data => this.setState({ postId: data.id }));

    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    // More on bootstrap forms
    // https://react-bootstrap.github.io/components/forms/
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="moreInfoForm.ControlSelect1">
          <Form.Label>I would like to...</Form.Label>
          <Form.Control as="select">
            <option>Select one...</option>
            <option>schedule a personal ZeeMee demo for my team</option>
            <option>join the weekly Wednesday "open to all" ZeeMee demo</option>
            <option>receive a ZeeMee Info. Packer</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="moreInfoForm.ControlInput1">
          <Form.Label>What is your name?</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="moreInfoForm.ControlInput2">
          <Form.Label>What is your <b>work</b> email address?</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group controlId="moreInfoForm.ControlSelect2">
          <Form.Label>How did you first discover ZeeMee?</Form.Label>
          <Form.Control as="select">
            <option>Select one...</option>
            <option>at a conference</option>
            <option>from an email</option>
            <option>from social media</option>
            <option>from a collegue</option>
            <option>from a news story</option>
            <option>from a ZeeMee website</option>
            <option>other</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default MoreInfoForm;
