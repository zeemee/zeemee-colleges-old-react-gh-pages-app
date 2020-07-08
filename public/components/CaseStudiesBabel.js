'use strict';
const elem = React.createElement;

class CaseStudiesBabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const url = `http://zeemee-dev.com:3000/api/poja/colleges/case_studies.json`;
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
    //return elem('h1', {}, 'bob');
    const { error, isLoaded, items } = this.state;
    if (error) {
      return elem("div", {}, error.message);
    } else if (!isLoaded) {
      return elem("div", {}, "Loading...");
    } else {
      return elem(
        "ul",
        {},
        items.map(item => elem("li", { key: item.name }, item.name) )
      );
    }
  }
}

const domContainer = document.querySelector('#case_studies_container');
ReactDOM.render(elem(CaseStudies), domContainer);
