import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
// import Debug from '../Debug'

const MainArticle = (props = {}) => {
  const { heading, subheading, description, images, owner_id, category_id, created_at, tags, meta, icons } = props
  return (
    <div className='mainArticle'>
      {/* <Debug {...props} /> */}
      <Header title={heading} subtitle={subheading} />
      <Body description={description} />
      <Footer images={images} owner_id={owner_id} category_id={category_id} created_at={created_at} tags={tags} meta={meta} icons={icons} />
    </div>
  )
}

export default MainArticle
