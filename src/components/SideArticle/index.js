import React from 'react'
import Header from './Header'
import Body from './Body'
import { Parallax } from 'react-scroll-parallax'

const SideArticle = (props = {}) => {
  const {
    heading,
    subheading,
    description,
    toggle,
    id
   } = props
  const sideArticleStyle = {
    float: 'left',
    width: '230px',
    backgroundColor: 'yellow',
    marginBottom: '100px',
    borderRadius: '15px',
    padding: '48px',
    marginTop: '-70px',
    maxWidth: '333px',
    textAlign: 'center'
  }
  const buttonStyle = {
    padding: '20px 60px',
    backgroundColor: 'yellow',
    border: 'solid 1px black',
    marginTop: '20px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '16px'
  }

  return (
    <Parallax
      className='custom-class'
      offsetYMax='90px'
      offsetYMin='0px'
      slowerScrollRate
      tag='sideArticle'
    >
      <div style={sideArticleStyle}>
        <Header title={heading} subtitle={subheading} />
        <Body description={description} />
        <button onClick={() => toggle(id)} style={buttonStyle}> Clicca qui </button>
      </div>
    </Parallax>
  )
}

export default SideArticle
