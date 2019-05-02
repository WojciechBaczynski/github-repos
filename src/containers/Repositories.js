import React, { Component } from "react";
import axios from "axios";
import DisplayRepositories from "../components/DisplayRepositories";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context";

class Repositories extends Component {
  state = {
    searchedRepo: "react",
    pages: null,
    currentPage: 1,
    repositories: [],
    timeout: null,
    fetching: true
  };

  fetchingRepositories = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${
          this.state.searchedRepo
        }&page=${this.state.currentPage}`
      )
      .then(({ data }) => {
        let pagesCount =
          Math.ceil(data.total_count / 30) > 35
            ? 34
            : Math.ceil(data.total_count / 30);
        this.setState({
          repositories: data.items,
          fetching: false,
          pages: pagesCount
        });
      })
      .catch(error => {
        alert("Failed to fetch!");
        console.log(error);
      });
  };

  handleRepositoryNameChange = event => {
    clearTimeout(this.state.timeout);
    this.setState({
      searchedRepo: event.target.value,
      fetching: true,
      timeout: setTimeout(this.fetchingRepositories, 1000)
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchingRepositories();
      window.scrollTo(0, 0);
    }
  }

  setCurrentPage = page => this.setState({ currentPage: page });

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
            onChange={this.handleRepositoryNameChange}
          />
        </div>
        <div className={`bg-hero-${this.context}-indigo-low bg-grey-light`}>
          <div className="relative h-full min-h-96 flex flex-wrap justify-center items-center pt-8 ">
            {this.state.fetching ? (
              <Spinner />
            ) : (
              <>
                <DisplayRepositories repositories={this.state.repositories} />
              </>
            )}
          </div>
          {!this.state.fetching && (
            <Pagination
              setCurrentPage={this.setCurrentPage}
              pages={this.state.pages}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

Repositories.contextType = ThemeContext;

export default Repositories;
