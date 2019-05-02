import React, { useState, useEffect } from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const [page, changePage] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
    console.log(`dupa ${page}`);
  }, [setCurrentPage, page]);

  return (
    <div>
      {[1, 2, 3].slice(0, 3).map(item => (
        <button key={item} onClick={() => changePage(item)}>
          {item}
        </button>
      ))}
      <input
        type="text"
        value={page}
        onChange={e => changePage(+e.target.value)}
      />
      <button onClick={() => changePage(page)}>{pages}</button>
    </div>
  );
};

export default Pagination;
