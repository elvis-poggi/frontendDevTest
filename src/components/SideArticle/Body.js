import React from 'react'

const Body = (props = {}) => {
  const { description } = props

  return (
    <div>
      <strong>Body</strong>
      <span> {description}</span>
    </div>
  )
}

export default Body
