import React from 'react'

const Navbar = (props = {}) => {
  const { data = {} } = props
  return (
    <div>
      <h1>{data.name}Asdrubale</h1> <h2>LOREM IPSUM DOLOR</h2>
    </div>
  )
}

export default Navbar
