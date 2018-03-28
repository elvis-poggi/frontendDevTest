import React from 'react'
import avatar from '../../avatar.png'

const ownImg = {
  width: '30px',
  borderRadius: '50px',
  verticalAlign: 'middle'
}
const ownSpan = {
  color: 'grey',
  paddingLeft: '10px',
  fontSize: '13px'
}

const Owner = (props = {}) => {
  const { ownId } = props

  return (
    <div>
      <img alt={ownId} src={avatar} style={ownImg} />
      <span style={ownSpan}>
        Lorem Ipsum
      </span>
    </div>
  )
}

export default Owner
