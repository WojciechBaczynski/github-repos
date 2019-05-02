import React, { useState, useEffect } from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const [page, changePage] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
  }, [setCurrentPage, page]);

  const pageIncrement = (page, pages) => {
    if (page < pages) {
      page++;
      changePage(page);
    }
  };

  const pageDecrement = page => {
    if (page > 1) {
      page--;
      changePage(page);
    }
  };

  return (
    <div className="flex justify-center items-center pb-2">
      <button
        onClick={() => pageDecrement(page)}
        className="appearance-none bg-transparent border-1 border border-indigo rounded-full p-2 font-body text-indigo-dark opacity-25 hover:opacity-100 outline"
      >
        &larr;
      </button>
      <div className="px-2 text-indigo text-lg font-normal">{`Page ${page} from ${pages}`}</div>
      <button
        onClick={() => pageIncrement(page, pages)}
        className="appearance-none bg-transparent border-1 border border-indigo rounded-full p-2 font-body text-indigo-dark opacity-25 hover:opacity-100 outline"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
