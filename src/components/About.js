import React, { Component } from "react";
import Profile from "./ProfileClass";

class About extends Component {
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mt-8 mb-4">
          About Me
        </h1>
        <Profile name="Manan" />
      </div>
    );
  }

  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
}

export default About;
