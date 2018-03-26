import React from 'react'
import Meta from './Meta'

const Footer = (props = {}) => {
  const { owner_id, category_id, created_at, tags, meta, icons } = props
  return (
    <div>
      <Meta ownerId={owner_id} categoryId={category_id} createdAt={created_at} tags={tags} meta={meta} icons={icons} />
    </div>
  )
}

export default Footer
