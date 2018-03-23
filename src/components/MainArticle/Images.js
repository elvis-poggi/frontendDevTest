import React from 'react'

const Images = (props) => {
  const { images = [] } = props

  return (
    <div>
      <strong>Images</strong>
      {images.map((image) => <img src={image.url} alt={image.type} key={image.id} />)}
    </div>
  )
}

export default Images
