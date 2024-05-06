import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
        {gotoNextPage && <button onClick={gotoNextPage}>Next Page</button>}
       {gotoPrevPage && <button onClick={gotoPrevPage}>Prev Page</button>}
    </div>
  )
}
