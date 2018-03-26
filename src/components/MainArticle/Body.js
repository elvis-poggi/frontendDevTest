import React from 'react'

const Body = (props = {}) => {
  const { description } = props

  return (
    <div className='body'>
      <span>
        {description}
      </span>
    </div>
  )
}

export default Body
