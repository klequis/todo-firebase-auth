import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// eslint-disable-next-line
import { green } from 'logger'

function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Todos
      </Link>

      <button className="btn btn-dark">Sign In</button>

      <button
        className="btn btn-dark"
        
      >
        Sign Out
      </button>
    </nav>
  )
}

export default withRouter(NavBar)
