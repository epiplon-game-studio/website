import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import './Pagination.scss'

export default function Pagination({page, totalPages, onPageChanged}) {
    const nextPage = () => {
        let next = page
        next++
        return next
    }

    const previousPage = () => {
        let previous = page
        previous--
        return previous
    }

    return (
        <div className="pagination" data-testid="pagination">
            {(page < totalPages) ? <Link to={`/blog?page=${nextPage()}`} onClick={() => onPageChanged()}>Next Page</Link> : <></>}
            {(page > 1 && page <= totalPages) ? <Link to={`/blog?page=${previousPage()}`} onClick={() => onPageChanged()}>Previous Page</Link> : <></>}
        </div>
    )
}