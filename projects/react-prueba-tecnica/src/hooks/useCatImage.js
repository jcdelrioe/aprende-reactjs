import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
export function useCatImage({ fact }) {
  const [imgSrc, setImgSrc] = useState()
  console.log(imgSrc)

  //Efecto para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join('%20')
    setImgSrc(`${CAT_PREFIX_IMAGE_URL}${threeFirstWords}`)
  }, [fact])

  return { imgSrc }
}
