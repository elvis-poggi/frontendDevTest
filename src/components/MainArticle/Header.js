import React from 'react'

const Header = (props = {}) => {
  const { title, subtitle } = props

  return (
    <div className='header'>
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Header
