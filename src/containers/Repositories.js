import React, { Component } from "react";
import axios from "axios";
import DisplayOwner from "../components/DisplayOwner";
import DisplayRepositories from "../components/DisplayRepositories";
import WithNoUser from "../components/WithNoUser";

class Repositories extends Component {
  state = {
    userName: "WojciechBaczynski",
    repositories: [],
    timeout: null
  };

  fetchingRepositories = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}/repos`)
      .then(({ data }) => this.setState({ repositories: data }))
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
        {this.state.repositories.length !== 0 ? (
          <React.Fragment>
            <DisplayOwner ownerData={this.state.repositories[0].owner} />
            <DisplayRepositories repositoriesData={this.state.repositories} />
          </React.Fragment>
        ) : (
          <WithNoUser />
        )}
      </React.Fragment>
    );
  }
}

export default Repositories;
