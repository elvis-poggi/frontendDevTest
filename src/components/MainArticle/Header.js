import React from 'react'

const headerStyle = {
  width: '641.25px'
}
const normalSub = {
  fontWeight: 'normal',
  paddingTop: '25px',
  fontSize: '18px',
  fontFamily: 'Open Sans, sans-serif'

}
const normal = {
  fontWeight: 'normal'
}

const Header = (props = {}) => {
  const { title, subtitle } = props

  return (
    <div style={headerStyle}>
      <h2 style={normalSub}>{title}</h2>
      <h1 style={normal}>{subtitle}</h1>
    </div>
  )
}

export default Header
