import React from 'react'

const Pagination = ({ postsPerpage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++){
        pageNumbers.push(i);
    }
  return (
    <ul className='pagination'>
        {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a href='!#' className='page-link'>
                    {number}
                </a>
            </li>
        ))}
    </ul>
  )
}

export default Pagination