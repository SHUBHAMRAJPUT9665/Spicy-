import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    console.log("parent constructor called");

    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("parent render called");

    return (
      <div className="mt-2">
        <h1 className="font-medium text-xl text-center ">About us</h1>
        <UserClass name={"Shubhma Rajput"} location={"nashik"} />
      </div>
    );
  }
}

export default About;
