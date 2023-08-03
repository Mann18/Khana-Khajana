import Profile from "./ProfileClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>;
//       <Profile name="manan"/>
//     </div>
//   );
// };
// export default About;

class About extends Component {
  
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    return (
      <div>
        {console.log("Parent Render")}
        <h1>About Us</h1>
        <Profile name="manan" />
      </div>
    );
  }
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
}

export default About;
