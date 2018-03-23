import React from 'react'

const Content = (props = {}) => {
  let left = {
    float: 'left'
  }
  let rightSideBar = {
    float: 'right'
  }
  return (
    <div>
      <div style={left}>
        <p>titolino</p>
        <h1>Titolo maiuscolo</h1>
        <span>testo articolo</span>
        <div>
          <div>immagine nome cognome</div>
          <span>1icona</span>
          <span>2icona</span>
          <span>3icona</span>
        </div>
        <div>
        galleria con 6 immagini
      </div>
      </div>
      <div style={rightSideBar}>
        <div>
          icona
          <p>testo piccolo</p>
          <h1>testo grande in grassetto</h1>
          <button> clicca qui </button>
        </div>
        <div>
          <h1>
            Testo in grassetto
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Content
