import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeftCircle } from "../assets/icons/arrow-left-circle.svg";
import { ReactComponent as ArrowRightCircle } from "../assets/icons/arrow-right-circle.svg";

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
      <ArrowLeftCircle
        className="text-indigo h-6 opacity-25 hover:opacity-100"
        onClick={() => pageDecrement(page)}
      />
      <span className="px-2 text-indigo text-lg font-normal">{`${page}/${pages}`}</span>
      <ArrowRightCircle
        className="text-indigo h-6 opacity-25 hover:opacity-100"
        onClick={() => pageIncrement(page, pages)}
      />
    </div>
  );
};

export default Pagination;
