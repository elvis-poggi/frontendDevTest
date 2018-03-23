import React from 'react'
import Debug from '../Debug'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const SideArticle = (props = {}) => {
  const { heading, subheading, description, owner_id, category_id, created_at, tags, meta, icons } = props

  return (
    <div>
      <strong>SideArticle</strong>
      <Debug {...props} subtitle={subheading} />
      <Header title={heading} />
      <Body description={description} />
      <Footer owner_id={owner_id} category_id={category_id} created_at={created_at} tags={tags} meta={meta} icons={icons} />
    </div>
  )
}

export default SideArticle
