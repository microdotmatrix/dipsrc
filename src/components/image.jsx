import React, { useRef } from 'react'

const Image = (props) => {
  const { src, h = 'auto', w = 'auto' } = useRef(null)
  return (
    <img
      src={src}
      height={h}
      width={w}
      loading="lazy"
      decoding="async"
      {...props} />
  )
}

export default Image