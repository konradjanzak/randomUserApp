import React from "react";
import "./ButtonFetchUsers.css";

const ButtonFetchUsers = props => {
  return <button onClick={props.click}> Add random user </button>;
};

export default ButtonFetchUsers;
