import React from 'react'
import Owner from './Owner'
import drop from '../../drop.svg'
import paper from '../../paper.svg'
import fire from '../../fire.svg'

const reactionContainer = {
  color: 'grey'
}

const icon = {
  paddingLeft: '20px',
  verticalAlign: '-webkit-baseline-middle'
}

const containerStyle = {
  display: 'flex',
  margin: '35px 0',
  justifyContent: 'space-between'
}
const Meta = (props = {}) => {
  const { ownerId } = props

  return (
    <div style={containerStyle}>
      <Owner ownId={ownerId} />
      <div style={reactionContainer}>
        <img src={fire} style={icon} alt='fire' />
        <img src={paper} style={icon} alt='paper' />
        <img src={drop} style={icon} alt='drop' />
      </div>
    </div>
  )
}

export default Meta
