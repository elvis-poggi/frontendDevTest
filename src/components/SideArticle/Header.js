import React from 'react'
// import Debug from '../Debug'

const Header = (props = {}) => {
  const { title, subtitle } = props
  return (
    <div>
      <strong>Header</strong>
      {/* <Debug data={props} /> */}
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
