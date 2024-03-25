import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import './All.css'

const All = () => {
 
  return (
  <div>
    <div id='nav'>
      <Link to='/' className='lii'><h3>All</h3></Link>
      <Link to='/fullStackDevelopment' className='lii'><h3>Full stack development</h3></Link>
      <Link to='/dataScience' className='lii'><h3>Data science</h3></Link>
      <Link to='/cyberSecurity' className='lii'><h3>Cyber security</h3></Link>
      <Link to='/career' className='lii'><h3>Career</h3></Link>        
    </div>
    <div id='out'>
      <Outlet />
      </div>
    </div>
  )
}

export default All