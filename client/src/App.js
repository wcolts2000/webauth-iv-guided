import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Users from "./users/Users";

function App(props) {
  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default withRouter(App);
