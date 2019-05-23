import axios from "axios";
import React from "react";

// tell axios where to find the api
axios.defaults.baseURL = "http://localhost:5000/api";

// interceptors can execute code before a request happens or when a request comes in
axios.interceptors.request.use(
  function(options) {
    // this function has access to th request options passed to axios
    // if we do a axios.get('/api', reqOptions)
    // axios well pass reqOptions object as the first argument to this function
    // read the token from localStorage and attach it to the request as the authorization header
    options.headers.authorization = localStorage.getItem("jwt");
    // now any component rendered with this HOC will attach the token automatically
    return options;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");

      const notLoggedIn = <div>Please Login to see the users</div>;
      // if there is no token, then show a message to the user
      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
    }
  };
}
