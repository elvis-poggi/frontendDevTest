import React from 'react'
import Debug from '../Debug'

const Meta = (props = {}) => {
  const { ownerId, categoryId, createdAt, tags, meta, icons } = props
  return (
    <div>
      <strong>Meta</strong>
      <Debug ownerId={ownerId} />
      <Debug categoryId={categoryId} />
      <Debug createdAt={createdAt} />
      <Debug tags={tags} />
      <Debug meta={meta} />
      <Debug icons={icons} />
    </div>
  )
}

export default Meta
