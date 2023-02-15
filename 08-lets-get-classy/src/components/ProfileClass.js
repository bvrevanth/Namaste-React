import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
    }
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

/*
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */

export default Profile;
