// this is High order components

import React from "react";

import { Redirect } from "react-router-dom";
const Protected = (props) => {
  console.log(props.cmp);

  const Comp = props.cmp;

  console.log("i am from protected");
  console.log(localStorage.getItem("Login"));
  var token = JSON.parse(localStorage.getItem("Login"));
  return <div>{token ? <Comp /> : <Redirect to="/login" />}</div>;
};

export default Protected;
