import React from 'react';
import classNames from 'classnames';

const BottomNavigation = props => {
  const { currentPage, nextPage, previousPage, onReset } = props;

  return (
    <div className="d-flex justify-content-center">
      {currentPage < 4 ? (
        <div>
          <button
            type="button"
            className={classNames(
              'btn',
              { 'btn-secondary': currentPage !== 1 },
              { 'btn-light': currentPage === 1 }
            )}
            disabled={currentPage === 1}
            onClick={() => previousPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary ml-4"
            onClick={() => nextPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      ) : (
        <button type="button" className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default BottomNavigation;
