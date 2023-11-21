import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

function Otro() {
  const { imgSrc } = useCatImage({ fact: 'JCDRE' })
  return <>{imgSrc && <img src={imgSrc} />}</>
}

export default Otro
