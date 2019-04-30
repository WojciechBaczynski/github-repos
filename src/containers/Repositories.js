import React, { Component } from "react";
import axios from "axios";
import DisplayOwner from "../components/DisplayOwner";
import DisplayRepositories from "../components/DisplayRepositories";

class Repositories extends Component {
  state = {
    userName: "WojciechBaczynski",
    repositories: [],
    timeout: null,
    fetching: true
  };

  fetchingRepositories = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}/repos`)
      .then(({ data }) =>
        this.setState({ repositories: data, fetching: false })
      )
      .catch(error => console.log(error));
  };

  handleUserNameChange = event => {
    clearTimeout(this.state.timeout);
    this.setState({
      userName: event.target.value,
      timeout: setTimeout(this.fetchingRepositories, 1000)
    });
  };

  componentDidMount() {
    this.fetchingRepositories();
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: "20px", background: "#ddd" }}>
          Input:{" "}
          <input
            placeholder="type username"
            type="text"
            onChange={this.handleUserNameChange}
          />
        </div>
        {this.state.fetching ? (
          <div>Fetching...</div>
        ) : (
          <React.Fragment>
            <DisplayOwner repositories={this.state.repositories} />
            <DisplayRepositories repositories={this.state.repositories} />{" "}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Repositories;
