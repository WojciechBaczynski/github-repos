import React, { Component } from "react";
import axios from "axios";

class DisplayRepositories extends Component {
  state = {
    userName: "PeterPorzuczek",
    repositories: [],
    timeout: null
  };

  displayOwner = () => {
    return this.state.repositories.length === 0 ? (
      <div />
    ) : (
      <div>
        <img src={this.state.repositories[0].owner.avatar_url} alt="morda" />
        <div>Name: {this.state.repositories[0].owner.login}</div>
      </div>
    );
  };

  displayRepositories = () => {
    return this.state.repositories.map((repository, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <div>Name: {repository.name}</div>
        <div>Description: {repository.description}</div>
        <div>Stars: {repository.stargazers_count}</div>
      </div>
    ));
  };

  fetchingRepositories = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}/repos`)
      .then(({ data }) => this.setState({ repositories: data }))
      .catch(error => console.log(error));
  };

  handleUserNameChange = event => {
    clearTimeout(this.state.timeout);
    this.setState({ userName: event.target.value });
    this.setState({ timeout: setTimeout(this.fetchingRepositories, 1000) });
  };

  componentDidMount() {
    this.fetchingRepositories();
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.handleUserNameChange} />
        </div>
        {this.displayOwner()}
        {this.displayRepositories()}
      </div>
    );
  }
}

export default DisplayRepositories;
