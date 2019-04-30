import React from "react";

const displayRepositories = ({ repositories }) => {
  return repositories.length !== 0 ? (
    repositories.map((repository, index) => (
      <div key={index} style={{ marginBottom: "20px", background: "#ccc" }}>
        <p>Name: {repository.name}</p>
        <p>Description: {repository.description}</p>
        <p>Stars: {repository.stargazers_count}</p>
      </div>
    ))
  ) : (
    <div>No repo</div>
  );
};

export default displayRepositories;
