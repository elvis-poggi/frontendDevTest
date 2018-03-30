import React from 'react'

const s = {
  width: 150,
  height: 150,
  borderRadius: 15
}

const Gallery = (props = {}) => {
  const { images } = props

  return (
    <div className='gallery'>
      {images.map((image) => <img src={image.url} alt={image.type} key={image.id} style={s} />)}
    </div>
  )
}

export default Gallery
