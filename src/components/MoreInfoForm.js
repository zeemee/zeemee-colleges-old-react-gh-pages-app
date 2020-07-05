import React, { Component } from "react";

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
    const url = "https://www.zaptack.com/api/poja/colleges/more_info.json";
    //const url = "http://zeemee-dev.com:3000/api/poja/colleges/more_info.json";

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MoreInfoForm;
