import React from 'react'

const Icons = (props = {}) => {
  const { icons } = props

  return (
    <div>
      Icons:
      {icons.map(icon => <strong id={icons}>{icons}</strong>)}
    </div>
  )
}

export default Icons
