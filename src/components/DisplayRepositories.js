import React from "react";

const displayRepositories = ({ repositories }) => {
  return repositories.length !== 0 ? (
    repositories.map((repository, index) => (
      <div
        key={index}
        className="w-1/2 p-4 m-4 max-w-sm rounded overflow-hidden bg-transparent h-112 justify-center flex items-center flex-col"
      >
        <img
          className="min-w-32 min-h-32 max-h-32 max-w-32 rounded-full w-32 h-1/3 z-10 bg-white border-solid border-red border-4"
          src={repository.owner.avatar_url}
          alt="morda"
        />
        <div className="min-h-2/3 overflow-hidden font-normal bg-white shadow-lg pt-8 -mt-8 w-9/10 px-4 h-2/3 mb-8">
          <p>ID: {index}</p>
          <p>Owner: {repository.owner.login}</p>
          <p>Name: {repository.name}</p>
          <p>Description: {repository.description}</p>
          <p>Stars: {repository.stargazers_count}</p>
        </div>
      </div>
    ))
  ) : (
    <div>No repo</div>
  );
};

export default displayRepositories;
