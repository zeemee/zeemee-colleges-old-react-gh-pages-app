import React, { Component } from "react";

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      partners: [],
      colleges: []
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/partners.json`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            partners: result.items,
            colleges: result.colleges
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
    const { error, isLoaded, colleges, partners } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Partners Page</h1>
          <table>
            <tbody>
              <tr valign="top">
                <td>
                  <h2>Partners</h2>
                  <ul>
                    {partners.map(item => (
                      <li key={item.name}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <h2>Colleges</h2>
                  <ul>
                    {colleges.map(college => (
                      <li key={college}>
                        {college}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Partners;
