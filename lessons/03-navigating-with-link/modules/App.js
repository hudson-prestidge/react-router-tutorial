import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
    <div>
      <div>Hello, React Router!</div>
      <ul>
        <li><Link to='/About'> About </Link></li>
        <li><Link to='/Repos'> Repos </Link></li>
      </ul>
    </div>
    )
  }
})
