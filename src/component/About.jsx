import React, { useState } from "react";
import UserClass from "./UserClass";

const About = (props) => {

  return (
    <div className="mt-2">
      <h1 className="font-medium text-xl text-center">About us</h1>
      <UserClass name={"Shubhma Rajput"} location={"nashik"} />
    </div>
  );
};

export default About;
