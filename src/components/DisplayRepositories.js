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
        <div className="text-center justify-around flex flex-col  min-h-2/3 overflow-hidden font-normal bg-white shadow-md sm:pt-8 sm:w-full w-9/10 px-4 h-2/3">
          <div>
            Owner: <span className="font-medium">{repository.owner.login}</span>
          </div>
          <div>
            Repository: <span className="font-medium">{repository.name}</span>
          </div>
          <div>
            Description:{" "}
            <span className="font-medium">{repository.description}</span>
          </div>
          <div>
            Stars:{" "}
            <span className="font-medium">{repository.stargazers_count}</span>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div>No repo</div>
  );
};

export default displayRepositories;
