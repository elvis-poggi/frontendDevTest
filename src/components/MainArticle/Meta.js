import React from 'react'
// import Debug from '../Debug'
import Owner from './Owner'

const Meta = (props = {}) => {
  const { ownerId, categoryId, createdAt, tags } = props
  return (
    <div>
      <Owner ownId={ownerId} catId={categoryId} tags={tags} createdAt={createdAt} />
    </div>
  )
}

export default Meta
