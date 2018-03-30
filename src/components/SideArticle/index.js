import React from 'react'
import Header from './Header'
import Body from './Body'
// import { Parallax } from 'react-scroll-parallax'
import { pad2 } from '../../utils.js'
import Gallery from './Gallery'

const bgNumStyle = {
  color: '#ECDA1F',
  fontSize: '200px',
  marginTop: '-127px',
  float: 'left',
  marginBottom: '-150px',
  marginLeft: '-65px',
  fontWeight: 'bold'
}
// const sideArticleStyle = {
//   float: 'left',
//   width: '230px',
//   backgroundColor: 'yellow',
//   marginBottom: '100px',
//   borderRadius: '15px',
//   padding: '48px',
//   maxWidth: '333px',
//   textAlign: 'center',
//   overflow: 'hidden'
// }
const buttonStyle = {
  padding: '20px 60px',
  backgroundColor: 'rgb(236, 218, 31)',
  border: 'solid 1px black',
  marginTop: '20px',
  marginBottom: '60px',
  borderRadius: '10px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '16px'
}

const SideArticle = (props = {}) => {
  const {
    heading,
    subheading,
    description,
    images,
    toggle,
    id,
    index,
    isOpen,
    anyOpen
   } = props
  const c = `${isOpen ? 'open' : 'closed'}`
  // const o = `${isOpen ? 0 : 1}`
  // const s = {
  //   ...bgNumStyle,
  //   opacity: o
  // }
  if (!isOpen && anyOpen) {
    return null
  }
    // <Parallax
    //   className={`${c}`}
    //   offsetYMax='80px'
    //   offsetYMin='-190px'
    //   slowerScrollRate
    //   disabled={isOpen}
    // >
  return (
    <div className={`popup_inner  ${c} sideArticle`} onClick={() => toggle(id)}>
        otherOpen {anyOpen ? 1 : 0}
      <span className='bgNumStyle' style={bgNumStyle}>{pad2(index + 1)}</span>
      <Header className='header' title={heading} subtitle={subheading} />
      <Body className='body' description={description} />
      <button onClick={() => toggle(id)} style={buttonStyle}> Clicca qui </button>
      <Gallery images={images} />
    </div>
  )
  // </Parallax>
}

export default SideArticle
