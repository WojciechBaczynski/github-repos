import React from "react";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as Save } from "../assets/icons/folder-plus.svg";
import { ReactComponent as Forget } from "../assets/icons/folder-minus.svg";

const DisplayRepository = ({
  repository,
  saveRepository,
  forgetRepository,
  savedRepositoriesIds
}) => {
  return (
    <div className="w-1/4 md:w-1/3 sm:w-full sm:mx-8 p-4 m-4 max-w-sm rounded bg-transparent h-88 sm:h-auto justify-center flex items-center flex-col sm:max-w-52 hover:-mt-1">
      <div className="h-8 sm:h-1/3 z-30 w-full flex relative -mr-2 sm:-mr-4">
        <div className="self-start">
          <img
            className="min-w-24 min-h-24 max-h-24 max-w-24 rounded-full w-24 bg-white -m-8 shadow-sm relative z-20"
            src={repository.owner.avatar_url}
            alt={Math.random() > 0.5 ? "morda" : "avatar"}
          />
          <span className="bg-white sm:max-w-32 sm:overflow-hidden h-8 py-1 pt-2 px-4 mb-0 rounded shadow-sm absolute ml-2 pl-8 z-10 inline-flex font-normal items-center">
            <a
              href={repository.owner.html_url}
              rel="noopener noreferrer"
              target="_blank"
              className="no-underline text-indigo cursor-pointer"
            >
              {repository.owner.login}
            </a>
          </span>
        </div>
      </div>
      <div className="border-gradient-t-indigo border-solid border-t-0 border-b-0 border-r-8 border-l-0 text-center justify-around flex flex-col  min-h-2/3 overflow-hidden font-normal bg-white shadow-md hover:shadow-lg sm:pt-8 sm:w-full w-9/10 px-4 pt-8 h-2/3 rounded">
        <div className="ml-8 mr-6 sm:pt-2">
          <div
            title={repository.name}
            className="font-body mb-2 mt-4 sm:mt-0 text-left text-3xl text-indigo-darker truncate"
          >
            <a
              href={repository.html_url}
              rel="noopener noreferrer"
              target="_blank"
              className="no-underline text-indigo-darker cursor-pointer"
            >
              {repository.name}
            </a>
          </div>
          <div className="text-left mt-4 p-2 px-4 pb-4 border border-indigo-lightest rounded h-16 sm:max-h-32 sm:h-auto mb-4 pb-2 overflow-auto">
            <span className="font-normal text-indigo-lighter leading-normal -mt-5 -ml-5 absolute bg-white ">
              Description
            </span>
            <span className="font-normal leading-normal mt-2 sm:max-w-32">
              {repository.description}
            </span>
          </div>
          <div className="text-left mb-6 flex flex-row justify-between">
            <div className="flex flex-col justify-center items-center w-10 opacity-75">
              <Star className="fill-current text-indigo-lighter pb-1 h-6" />
              <span className="font-normal text-indigo-darker">
                {repository.stargazers_count}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-10 opacity-75">
              {savedRepositoriesIds.includes(repository.id) ? (
                <Forget className="text-indigo-lighter pb-1 h-6" />
              ) : (
                <Save className="text-indigo-lighter pb-1 h-6" />
              )}
              <button
                onClick={() => {
                  let flag = savedRepositoriesIds.includes(repository.id);
                  if (flag) {
                    forgetRepository(repository.id);
                  } else {
                    saveRepository(repository);
                  }
                }}
                className="bg-transparent text-indigo-darker font-normal appearance-none cursor-pointer hover:border-4 border hover:border-indigo  border-transparent rounded focus:outline-none focus:shadow-outline"
              >
                {savedRepositoriesIds.includes(repository.id)
                  ? "Forget"
                  : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRepository;
