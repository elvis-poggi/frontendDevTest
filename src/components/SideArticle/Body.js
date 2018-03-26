import React from 'react'

const Body = (props = {}) => {
  const { description } = props

  return (
    <div>
      <span> {description}</span>
    </div>
  )
}

export default Body
