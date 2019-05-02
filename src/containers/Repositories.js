import React, { Component } from "react";
import axios from "axios";
import DisplayRepositories from "../components/DisplayRepositories";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context";

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
      .catch(error => {
        alert("Failed to fetched!");
        console.log(error);
      });
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
        <div
          className={`flex h-80 justify-center items-center bg-gradient-r-indigo  overflow-hidden relative shadow-inner border-solid border-grey-light border-t-0 border-r-0 border-l-0 border-b-5 `}
        >
          <div
            className={`h-full w-full absolute bg-hero-${
              this.context
            }-grey-mid`}
          />
          <input
            className="h-10 text-lg text-center shadow appearance-none border-1 border border-indigo rounded w-1/2 py-2 px-3 font-normal text-grey-darker leading-tight focus:outline-none focus:shadow-outline z-10"
            placeholder="Search"
            type="text"
            onChange={this.handleUserNameChange}
          />
        </div>
        <div
          className={`relative h-full min-h-96 flex flex-wrap justify-center items-center bg-hero-${
            this.context
          }-indigo-low pt-8 bg-grey-light`}
        >
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

Repositories.contextType = ThemeContext;

export default Repositories;
