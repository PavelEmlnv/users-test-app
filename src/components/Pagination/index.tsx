import React from 'react'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import './style.scss'

import Left from './assets/left.png'
import Right from './assets/right.png'

interface IProps {
  pagesTotal: number
  page: number
  url: string
}

export const Pagination: React.FC<IProps> = ({ pagesTotal = 51, page = 1, url }) => {

  const history = useHistory()

  const pagination = (currentPage: number, total: number) => {
    let current: number = currentPage,
        last: number = total,
        delta: number = 9,
        shortDelta: number = 5,
        leftBreakpoint: number = 6,

        left = current <= leftBreakpoint ? 1 : current + shortDelta >= total ? current - shortDelta - (current + shortDelta - total) + 1 : current - shortDelta + 1,
        right = current <= leftBreakpoint ? delta + 2 : current + shortDelta - 1,
        range = [],
        rangeWithDots = [],
        l
        
    for (let i = 1; i <= last; i++) {
      if (pagesTotal <= 12) {
        range.push(i)
      } else if ((i === 1 || i === last) || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push('...')
        }
      }
      rangeWithDots.push(i)
      l = i
    }

    return rangeWithDots
  }

  const leftPage = () => {
    if (page > 1 && page <= pagesTotal) {
      const route = `${url}${page - 1}`
      history.push({ pathname: route })
    }
  }
  const rightPage = () => {
    if (page < pagesTotal) {
      const route = `${url}${page + 1}`
      history.push({ pathname: route })
    }
  }
  
  return (
    <div className="pagination">
      
      <img onClick={leftPage} src={Left} alt="Previous page" />
      
      <div className="pages">
        {pagination(page, pagesTotal).map((currentPage, index) => {
          if (currentPage !== '...') {
            return (
              <Link key={`page-${index}`} to={`${url}${currentPage}`}>
                <div className={classNames("page-link", currentPage === page && 'active')}>
                  <p>{currentPage}</p>
                </div>
              </Link>
            )
          } else {
            return (
              <div key={`page-${index}`} className="page-link">
                <p>...</p>
              </div>
            )
          }
        })}
      </div>
      
      <img onClick={rightPage} src={Right} alt="Next page" />
    
    </div>
  )
}