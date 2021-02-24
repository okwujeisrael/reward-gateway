import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className="flex flex-wrap w-7/12 items-center justify-center mt-8 bg-gray-700 py-4">
        {
          pageNumbers.map(number => (
            <li key={number} className="w-8 h-8 p-2 m-1 border-green-600 border inline-flex items-center justify-center bg-green-600 text-white hover:text-black hover:bg-green-400 cursor-pointer rounded">
              <button type="button" onClick={() => paginate(number)} className=""> {number}</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Pagination
