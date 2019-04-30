import React, { Component } from "react";
import axios from "axios";
import DisplayRepositories from "../components/DisplayRepositories";

class Repositories extends Component {
  state = {
    searchedRepo: "react",
    repositories: [],
    timeout: null,
    fetching: true
  };

  fetchingRepositories = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${
          this.state.searchedRepo
        }`
      )
      .then(({ data }) =>
        this.setState({ repositories: data.items, fetching: false })
      )
      .catch(error => console.log(error));
  };

  handleUserNameChange = event => {
    clearTimeout(this.state.timeout);
    this.setState({
      searchedRepo: event.target.value,
      fetching: true,
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
          Search github repositories:{" "}
          <input
            placeholder="keyword"
            type="text"
            onChange={this.handleUserNameChange}
          />
        </div>
        {this.state.fetching ? (
          <div>Fetching...</div>
        ) : (
          <DisplayRepositories repositories={this.state.repositories} />
        )}
      </React.Fragment>
    );
  }
}

export default Repositories;
