import React from 'react'
import Header from './Header'
import Body from './Body'
// import { Parallax } from 'react-scroll-parallax'
import { pad2 } from '../../utils.js'
import Gallery from './Gallery'

const bgNumStyle = {
  color: 'rgb(151, 139, 17, 0.44)',
  fontSize: '182px',
  marginTop: '-55px',
  float: 'left',
  marginBottom: '-100px',
  marginLeft: '-26px'
}

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

  if (!isOpen && anyOpen) {
    return null
  }
  console.log(isOpen)
  return (
    // <Parallax
    //   className={`${c}`}
    //   offsetYMax='70px'
    //   offsetYMin='-190px'
    //   slowerScrollRate
    //   disabled={isOpen}
    // >
    <div className={`popup_inner  ${c} sideArticle`} onClick={() => toggle(id)} >
        <span className='bgNumStyle' style={bgNumStyle}>{pad2(index + 1)}</span>
        <Header className='header' title={heading} subtitle={subheading} />
        <Body className='body' description={description} />
        <button onClick={() => toggle(id)} style={buttonStyle}> Clicca qui </button>
        <Gallery images={images} />
      </div>
    // </Parallax>
  )
}

export default SideArticle
