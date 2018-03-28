import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const MainArticle = (props = {}) => {
  const { heading, subheading, description, images, icons } = props

  return (
    <div className='mainArticle'>
      <Header title={heading} subtitle={subheading} />
      <Body description={description} />
      <Footer images={images} icons={icons} />
    </div>
  )
}

export default MainArticle
