import React, { Component } from "react";
import axios from "axios";
import DisplayRepositories from "../components/DisplayRepositories";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context";

class Repositories extends Component {
  state = {
    searchedRepo: "",
    pages: null,
    currentPage: 1,
    repositories: [],
    timeout: null,
    fetching: true
  };

  fetchRepositories = () => {
    this.state.searchedRepo &&
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
            pages: pagesCount === 0 ? null : pagesCount
          });
        })
        .catch(error => {
          alert("Failed to fetch!");
          console.log(error);
        });

    if (!this.state.searchedRepo) {
      this.setState({
        fetching: false,
        repositories: [],
        pages: null
      });
    }
  };

  handleRepositoryNameChange = event => {
    clearTimeout(this.state.timeout);
    this.setState({
      searchedRepo: event.target.value,
      fetching: true,
      timeout: setTimeout(this.fetchRepositories, 1000)
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchRepositories();
      window.scrollTo(0, 0);
    }
  }

  setCurrentPage = page => this.setState({ currentPage: page });

  componentDidMount() {
    this.fetchRepositories();
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
            autoFocus
            className="h-10 text-lg text-center shadow appearance-none border-1 border border-indigo rounded w-1/2 py-2 px-3 font-normal text-grey-darker leading-tight focus:outline-none focus:shadow-outline z-10"
            placeholder="Search"
            type="text"
            onChange={this.handleRepositoryNameChange}
          />
        </div>
        <div className={`bg-hero-${this.context}-indigo-low bg-grey-light`}>
          <div className="relative h-full min-h-96 flex flex-wrap justify-center items-center pt-8 ">
            <div className="relative w-full h-full min-h-96 flex flex-wrap justify-center items-center">
              {this.state.fetching ? (
                <Spinner />
              ) : (
                <DisplayRepositories
                  allRepositories={this.state.repositories}
                  isSearchActive={this.state.searchedRepo}
                />
              )}
            </div>
            {this.state.pages && (
              <Pagination
                setCurrentPage={this.setCurrentPage}
                pages={this.state.pages}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Repositories.contextType = ThemeContext;

export default Repositories;
