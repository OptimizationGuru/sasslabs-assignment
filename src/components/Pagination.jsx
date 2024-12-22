import React from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const getPaginationRange = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (currentPage <= 2) {
      startPage = 1;
      endPage = Math.min(3, totalPages);
    }

    if (currentPage >= totalPages - 1) {
      startPage = Math.max(totalPages - 2, 1);
      endPage = totalPages;
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPaginationRange();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(i);
  }

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div
      className="pagination-container"
      role="navigation"
      aria-label="Pagination Controls"
    >
      <button
        className="pagination-button"
        onClick={() => handlePageChange(1)}
        disabled={isPrevDisabled}
        aria-label="First Page"
      >
        <FaAngleDoubleLeft size={18} />
      </button>

      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        aria-label="Previous Page"
      >
        <FaChevronLeft size={18} />
      </button>

      {pageButtons.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextDisabled}
        aria-label="Next Page"
      >
        <FaChevronRight size={18} />
      </button>

      <button
        className="pagination-button"
        onClick={() => handlePageChange(totalPages)}
        disabled={isNextDisabled}
        aria-label="Last Page"
      >
        <FaAngleDoubleRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
