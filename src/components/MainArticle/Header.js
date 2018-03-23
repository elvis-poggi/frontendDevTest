import React from 'react'

const Header = (props = {}) => {
  const { title, subtitle } = props
  return (
    <div>
      <strong>Header</strong>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
