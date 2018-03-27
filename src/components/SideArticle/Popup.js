import React from 'react'

const Popup = (props = {}) => {
  const { data = {}, closePopup, isOpen } = props
  const { images = [], heading } = data
  const openClass = isOpen ? 'open' : ''

  return (
    <div className={`popup ${openClass}`} onClick={closePopup}>
      <div className='popup_inner'>
        <div className='header'>
          <p className={`${openClass}`}>{heading}</p>
        </div>
        <div className={`gallery ${openClass}`}>
          {images.map((image) => <img src={image.url} alt={image.type} key={image.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Popup
