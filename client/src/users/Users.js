import axios from "axios";
import React, { Component } from "react";
import requiresAuth from "../auth/requiresAuth";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Users);
