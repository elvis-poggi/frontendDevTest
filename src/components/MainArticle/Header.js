import React from 'react'

const headerStyle = {
  width: '641.25px'
}
const normal = {
  fontWeight: 'normal',
  paddingTop: '25px',
  fontSize: '18px',
  fontFamily: 'Open Sans, sans-serif'

}

const Header = (props = {}) => {
  const { title, subtitle } = props

  return (
    <div style={headerStyle}>
      <h2 style={normal}>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Header
