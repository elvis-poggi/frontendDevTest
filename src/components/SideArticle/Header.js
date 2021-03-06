import React from 'react'

const headerStyle = {
  textAlign: 'left',
  fontSize: '14px',
  padding: '30px'
}

const normal = {
  fontWeight: 'normal'
}

const Header = (props = {}) => {
  const { title, subtitle } = props

  return (
    <div style={headerStyle}>
      <h2 style={normal}>{subtitle}</h2>
      <h1 style={normal} >{title}</h1>
    </div>
  )
}

export default Header
