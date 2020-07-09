import React, { Component } from "react";

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
      return (
        <div>
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
