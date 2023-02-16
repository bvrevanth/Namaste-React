// import Profile from "./profile";
// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <p>THis is the namaste react course</p>
//       <Profile />
//     </div>
//   );
// };

import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Best place to make an Api call
  }
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>Namaste React Live Course Chapter 07 - Finding the Path</p>
        <ProfileFunctionalComponet />
      </div>
    );
  }
}

export default About;

/*

 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
