import React, { useState } from "react";
import UserclassName from "./UserclassName";

const About = (props) => {

  return (
    <div className="mt-2">
      <h1 className="font-medium text-xl text-center">About us</h1>
      <UserclassName name={"Shubhma Rajput"} location={"nashik"} />
    </div>
  );
};

export default About;
