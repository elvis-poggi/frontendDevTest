import React from 'react'
import Meta from './Meta'
import Images from './Images'

const Footer = (props = {}) => {
  const { images, icons } = props

  return (
    <div className='footer'>
      <Meta icons={icons} />
      <Images images={images} />
    </div>
  )
}

export default Footer
