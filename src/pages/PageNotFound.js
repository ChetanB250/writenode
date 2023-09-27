import React from 'react'
import PgNF from '../assets/images/page-not-found.jpg'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
const PageNotFound = () => {
  useTitle("PageNotFound")
  return (
    <section className='pageNotFound'>
      <p>404 / Page Not Found</p>
      <img src={PgNF} alt="pageNotFound" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}

export default PageNotFound
