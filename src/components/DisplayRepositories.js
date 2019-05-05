import React, { useState, useEffect } from "react";
import DisplayRepository from "./DisplayRepository";

const DisplayRepositories = ({ isSearchActive, allRepositories }) => {
  const [savedRepositories, setSavedRepositories] = useState([]);
  const [fetchedRepositories, setFetchedRepositories] = useState([]);
  const savedRepositoriesIds = savedRepositories.map(
    savedRepository => savedRepository.id
  );

  useEffect(() => {
    const localStorageRepositories = JSON.parse(localStorage.getItem("repos"));
    if (localStorageRepositories) {
      setSavedRepositories(localStorageRepositories);
    }
    setFetchedRepositories(allRepositories);
  }, [allRepositories]);

  const repositories =
    (Array.isArray(fetchedRepositories) &&
      fetchedRepositories.length !== 0 &&
      fetchedRepositories) ||
    (!isSearchActive && savedRepositories) ||
    [];

  const saveRepository = repository => {
    const repos = [...savedRepositories];
    repos.push(repository);
    localStorage.setItem("repos", JSON.stringify(repos));
    setSavedRepositories(repos);
  };

  const forgetRepository = repositoryId => {
    const repos = [...savedRepositories];
    const filteredRepositories = repos.filter(repo => repo.id !== repositoryId);
    localStorage.setItem("repos", JSON.stringify(filteredRepositories));
    setSavedRepositories(filteredRepositories);
  };

  return (
    <>
      {repositories.map(repository => (
        <DisplayRepository
          key={repository.id}
          repository={repository}
          saveRepository={saveRepository}
          forgetRepository={forgetRepository}
          savedRepositoriesIds={savedRepositoriesIds}
        />
      ))}
      {isSearchActive &&
        fetchedRepositories &&
        Array.isArray(fetchedRepositories) &&
        fetchedRepositories.length === 0 && (
          <span className="font-body text-2xl text-indigo-dark">
            No repositories found
          </span>
        )}
    </>
  );
};

export default DisplayRepositories;
