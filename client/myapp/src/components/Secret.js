import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Secret extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: "Loading...",
      redirect: false,
    };
  }
  componentDidMount() {
    console.log("i am from Secret");
    console.log(localStorage.getItem("Login"));
    var token = JSON.parse(localStorage.getItem("Login"));
    console.log(token);

    if (token) {
      //GET message from server using fetch api
      fetch("/api/secrete", {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      })
        .then((res) => res.text())
        .then((res) => this.setState({ message: res }))
        .catch((err) => {
          console.error(err);
          this.setState({ redirect: true });
        });
    } else {
      return (
        <div>
          <Redirect to="/login" />
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {" "}
        <h1>secrete</h1>
        <p>{this.state.message}</p>
        <h2>this is by the add heders to fecth </h2>
      </div>
    );
  }
}
