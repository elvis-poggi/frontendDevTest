import React from 'react'
// import Debug from '../../components/Debug'

const Popup = (props = {}) => {
  const { data = {}, closePopup } = props
  const { images, heading } = data
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <p>{heading}</p>
        {images.map((image) => <img src={image.url} alt={image.type} key={image.id} />)}
        <button onClick={closePopup}>close me</button>
      </div>
    </div>
  )
}

export default Popup
