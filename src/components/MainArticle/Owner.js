import React from 'react'

const Owner = (props = {}) => {
  const { ownId } = props
  const avatar = 'https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people5.jpg'
  const ownStyle = {
    paddingTop: '35px'
  }
  const ownImg = {
    width: '50px',
    borderRadius: '50px',
    verticalAlign: 'middle'
  }
  const ownSpan = {
    color: 'grey',
    paddingLeft: '10px'
  }
  const ownReactions = {
    float: 'right',
    marginTop: '15px'
  }

  return (
    <div style={ownStyle}>
      <img alt={ownId} src={avatar} style={ownImg} />
      <span style={ownSpan}>
        Own-id:
        <strong id={ownId}> { ownId } </strong>
      </span>

      <div style={ownReactions}>
        <span style={ownSpan}>fire</span>
        <span style={ownSpan}>paper</span>
        <span style={ownSpan}>drop</span>
      </div>
    </div>
  )
}

export default Owner
