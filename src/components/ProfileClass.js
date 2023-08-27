import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      avatar_url: "",
      bio: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mann18");
    const json = await data.json();

    this.setState({
      name: json.name,
      location: json.location,
      avatar_url: json.avatar_url,
      bio: json.bio,
    });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
          src={this.state.avatar_url}
          alt={this.state.name}
          className="h-48 w-48 rounded-full shadow-lg mb-4"
        />
        <h2 className="text-xl font-semibold mb-2 text-center">
          Hello, I'm <span className="text-blue-500">{this.state.name}</span>
        </h2>
        <h2 className="text-base font-semibold mb-2 text-center px-4">
          {this.state.bio}
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Based in {this.state.location}
        </p>
        <a
          href="https://github.com/mann18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-center"
        >
          Visit My GitHub Profile
        </a>
      </div>
    );
  }
}

export default Profile;
