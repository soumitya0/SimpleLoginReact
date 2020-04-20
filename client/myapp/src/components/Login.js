import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      login: false,
      store: null,
    };
  }

  //After Refresh the Page we should we Stable to Login true page i.e Welcome to Dashboard

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector = () => {
    console.log("ReferencePage");
    let token = JSON.parse(localStorage.getItem("Login"));
    console.log(token);
  };

  ///end//

  //logut/

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // if (res.status === 200) {
        //   this.props.history.push("/");

        // } else {
        //   const error = new Error(res.error);
        //   throw error;
        // }

        res.json().then((result) => {
          console.log("result", result.token);
          localStorage.setItem("Login", JSON.stringify(result.token));
          console.log(res.status);
          this.setState({
            login: true,
          });
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <div>
        {!this.state.login ? (
          <form onSubmit={this.onSubmit}>
            <h1>Login Below!</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        ) : (
          <div>
            <h1>Wlecome to DashBoard</h1>
          </div>
        )}
      </div>
    );
  }
}
