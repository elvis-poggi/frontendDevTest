import React from 'react'

const Images = (props) => {
  const { images = [] } = props
  if (!images.length) return null
  // const pippo = [...images, images[0], images[1]]

  return (
    <div className='gallery'>
      {images.map((image) => <div className='img' key={image.id} ><img src={image.url} alt={image.type} key={image.id} /></div>)}
    </div>
  )
}

export default Images
