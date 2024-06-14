import React from 'react'

const Pagination = ({pageNo , increasePage , decreasePage}) => {
  return (
    <div className='flex justify-center bg-slate-500 text-white p-2 mt-8 '>
        <i className="fa-solid fa-arrow-left px-8 " onClick={decreasePage}></i>
        <div className='font-bold'>{pageNo}</div>
        <i className="fa-solid fa-arrow-right px-8" onClick={increasePage}></i>
    </div>
  )
}

export default Pagination