import React from 'react'

const Debug = (props = {}) => {
  return (
    <pre> {JSON.stringify(props, 0, 2)} </pre>
  )
}
export default Debug
