import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
      <h2>Repos</h2>

      <ul>
        <li><Link to="/repos/reactjs/React-Router">React Router</Link></li>
        <li><Link to="/repos/facebook/React">React</Link></li>
      </ul>

      </div>
    )
  }
})
