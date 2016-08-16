import React from 'react'
import { Link, IndexLink } from 'react-router'

export default function Navigation () {
  return (
    <nav>
      <IndexLink to='/' activeClassName='active'>Home</IndexLink>
      { " | " }
      <Link to='dashboard' activeClassName='active'>Dashboard</Link>
    </nav>
  )
}
