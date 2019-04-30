import React from "react";

const displayRepositories = ({ repositories }) => {
  return repositories.length !== 0 ? (
    repositories.map((repository, index) => (
      <div key={index} style={{ marginBottom: "20px", background: "#ccc" }}>
        <img
          height="50px"
          width="50px"
          src={repository.owner.avatar_url}
          alt="morda"
        />
        <p>ID: {index}</p>
        <p>Owner: {repository.owner.login}</p>
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
