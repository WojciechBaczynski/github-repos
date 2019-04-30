import React, { Component } from "react";
import axios from "axios";
import DisplayRepositories from "../components/DisplayRepositories";
import Spinner from "../components/Spinner";

class Repositories extends Component {
  state = {
    searchedRepo: "jest",
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
        <div className="flex h-80 justify-center items-center bg-hero-overcast-red mb-8">
          <input
            className="h-10 text-lg text-center shadow appearance-none border-1 border border-red rounded w-1/2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type searched repository"
            type="text"
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {this.state.fetching ? (
            <Spinner />
          ) : (
            <DisplayRepositories repositories={this.state.repositories} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Repositories;
