import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      avatar_url: "",
    };
    console.log("child constructor-" + this.props.name);
  }
  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/mann18");
    const json = await data.json();
    console.log(json);
    console.log(json.login);
    console.log(json.avatar_url);
    this.setState({
      name: json.login,
      location: json.location,
      avatar_url: json.avatar_url,
    });
  }
  render() {
    return (
      <div>
        {console.log("child render")}
        <h1>Profile page...</h1>
        <h2>Name: {this.state.name}</h2>
        <img src={this.state.avatar_url} />
        <h2>Location: {this.state.location}</h2>
      </div>
    );
  }
}
export default Profile;
