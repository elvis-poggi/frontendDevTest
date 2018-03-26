import React from 'react'

const Navbar = (props = {}) => {
  const s = {
    color: 'black',
    textAlign: 'left'

  }
  return (
    <div style={s} className='navbar' id='navbar'>
      <h1>Asdrubale</h1>
      <div className='buttons'>
        <h2>LOREM</h2>
        <h2>IPSUM</h2>
        <h2>DOLOR</h2>
      </div>
    </div>
  )
}

export default Navbar
