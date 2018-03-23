import React from 'react'

const Article = (props = {}) => {
  const { data } = props
  let left = {
    color: 'black'
  }
  return (
    <div style={left}>
      <p>{data.title}titolino</p>
      <h1>{data.subtitle}Titolo maiuscolo</h1>
      <span>{data.article}testo articolo</span>
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
  )
}

export default Article
