import axios from "axios";
import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "sam",
    password: "pass" // note this is for demonstration, dont hardcode the username and password
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const endpoint = "http://localhost:5000/api/auth/login";

    axios
      .post(endpoint, this.state)
      .then(res => {
        // this is the new token coming in from the backend that we want to set to lcoal storage
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              onChange={this.handleChange}
              id="username"
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              onChange={this.handleChange}
              id="password"
              value={this.state.password}
              type="password"
            />
          </div>
          <br />
          <div>
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
