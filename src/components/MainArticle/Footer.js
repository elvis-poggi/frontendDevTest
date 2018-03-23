import React from 'react'
import Meta from './Meta'
import Images from './Images'

const Footer = (props = {}) => {
  const { images, owner_id, category_id, created_at, tags, meta, icons } = props

  return (
    <div>
      <strong>Footer</strong>
      <Meta ownerId={owner_id} categoryId={category_id} createdAt={created_at} tags={tags} meta={meta} icons={icons} />
      <Images images={images} />
    </div>
  )
}

export default Footer
