import React from 'react'

const Owner = (props = {}) => {
  const {
    ownId
    /* catId, tags = [], createdAt */
   } = props
  const avatar = 'https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people5.jpg'
  return (
    <div className='owner'>
      <img alt={ownId} src={avatar} />
      <span>
        Own-id:
        <strong id={ownId}> { ownId } </strong>
      </span>
      {/* Cat-id: <strong> { catId } </strong>
      Tags: {tags.map(tag =>
        <div key={tag}> { tag } </div>)}
      Created-at: <strong>{createdAt}</strong> */}
      <div className='reactions'>
        <span>fire</span>
        <span>paper</span>
        <span>drop</span>
      </div>
    </div>
  )
}

export default Owner
