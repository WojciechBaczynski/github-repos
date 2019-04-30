import React from "react";

const displayRepositories = ({ repositories }) => {
  return repositories.length !== 0 ? (
    repositories.map((repository, index) => (
      <div
        key={index}
        className="w-1/2 p-4 m-4 max-w-sm rounded bg-transparent h-112 justify-center flex items-center flex-col"
      >
        <img
          className="min-w-24 min-h-24 max-h-24 max-w-24 rounded-full w-24 h-1/3 z-10 bg-white border-solid border-grey-lightest border-2 self-start -m-8"
          src={repository.owner.avatar_url}
          alt="morda"
        />
        <div className="justify-center flex items-center flex-col min-h-2/3 overflow-hidden font-normal bg-white shadow-md pt-8 -mt-8 w-9/10 px-4 h-2/3 mb-8">
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
