import React from 'react'

const Gallery = (props = {}) => {
  const { images } = props

  return (

    <div className='gallery'>
      {images.map((image) => <img src={image.url} alt={image.type} key={image.id} />)}
    </div>
  )
}

export default Gallery
