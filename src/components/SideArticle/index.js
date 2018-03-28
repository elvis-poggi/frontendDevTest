import React from 'react'
import Header from './Header'
import Body from './Body'
import { Parallax } from 'react-scroll-parallax'
import { pad2 } from '../../utils.js'

const bgNumStyle = {
  color: '#ECDA1F',
  fontSize: '200px',
  marginTop: '-127px',
  float: 'left',
  marginBottom: '-150px',
  marginLeft: '-65px',
  fontWeight: 'bold'
}
const sideArticleStyle = {
  float: 'left',
  width: '230px',
  backgroundColor: 'yellow',
  marginBottom: '100px',
  borderRadius: '15px',
  padding: '48px',
  maxWidth: '333px',
  textAlign: 'center',
  overflow: 'hidden'
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

const SideArticle = (props = {}) => {
  const {
    heading,
    subheading,
    description,
    toggle,
    id,
    index
   } = props

  return (
    <Parallax
      className='custom-class'
      offsetYMax='80px'
      offsetYMin='-190px'
      slowerScrollRate
    >
      <div style={sideArticleStyle}>
        <span style={bgNumStyle}>{pad2(index + 1)}</span>
        <Header title={heading} subtitle={subheading} />
        <Body description={description} />
        <button onClick={() => toggle(id)} style={buttonStyle}> Clicca qui </button>
      </div>
    </Parallax>
  )
}

export default SideArticle
