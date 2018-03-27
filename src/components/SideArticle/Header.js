import React from 'react'

const Header = (props = {}) => {
  const { title, subtitle } = props
  const headerStyle = {
    textAlign: 'left'
  }

  return (
    <div style={headerStyle}>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
