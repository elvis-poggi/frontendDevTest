import React from 'react'

const Header = (props = {}) => {
  const { title, subtitle } = props
  const headerStyle = {
    width: '641.25px'
  }

  return (
    <div style={headerStyle}>
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Header
