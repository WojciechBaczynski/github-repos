import React from "react";

const displayRepositories = ({ repositoriesData }) => {
  return repositoriesData.map((repository, index) => (
    <div key={index} style={{ marginBottom: "20px", background: "#ccc" }}>
      <p>Name: {repository.name}</p>
      <p>Description: {repository.description}</p>
      <p>Stars: {repository.stargazers_count}</p>
    </div>
  ));
};

export default displayRepositories;
