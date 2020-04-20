import React, { Component } from "react";

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: [],
      testing: "",
    };
  }

  componentDidMount() {
    console.log("fetching .....");

    fetch("/testing").then((response) =>
      response.text().then((data) => {
        console.log(data);
        this.setState({ testing: data });
      }),
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.testing}</h2>
      </div>
    );
  }
}
export default Check;
