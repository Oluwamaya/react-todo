import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
            <a href="/">Home</a>
            <a href="">contact</a>
            <a href="">about</a>
            <Link to="/user">users</Link>
        </div>
    </div>
  )
}

export default Nav