/*
  * Author: Kevin Tamakuwala (Github: @kevintamakuwala)
  * Date: 18/10/2003
*/

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = () => {
  // item offset
  const [offset, setOffset] = useState(0);

  // Number of items per page
  const [perPage] = useState(10);

  // current page number
  const [currentPage, setCurrentPage] = useState(0);

  // number of items per page
  const [pageCount, setPageCount] = useState(0);

  // posting data
  const [postData, setPostData] = useState([]);

  const receivedData = () => {
    // Total Number of items
    const length = 500;

    // array for storing items, it can be array of objects for API calls.
    const data = [];

    for (let i = 1; i <= length; i++) {
      data.push(i);
    }

    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((element, index) => (
      <p key={index}>{element}</p>
    ));
    setPageCount(Math.ceil(data.length / perPage));
    setPostData(postData);
  };

  const handlePageClick = (selectedPage) => {
    const newOffset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(newOffset);
  };

  useEffect(() => {
    receivedData();
  }, [offset]);

  return (
    <div className="wrapper">
      {postData}
      <ReactPaginate
        // Double click on Prev and Next Buttons will move to first and last page respectively.
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selectedPage) => handlePageClick(selectedPage.selected)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
