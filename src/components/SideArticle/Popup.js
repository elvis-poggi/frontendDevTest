import React from 'react'
// import Debug from '../../components/Debug'

const Popup = (props = {}) => {
  const { data = {}, closePopup } = props
  const { images, heading } = data
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <div className='header'>
          <p>{heading}</p>
        </div>
        <div className='gallery'>
          {images.map((image) => <img src={image.url} alt={image.type} key={image.id} />)}
        </div>
        <button onClick={closePopup}>click here</button>
      </div>
    </div>
  )
}

export default Popup
