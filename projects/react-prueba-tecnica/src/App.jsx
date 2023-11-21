import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import Otro from './Components/Otro.jsx'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imgSrc } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {/* <section> */}
      {fact && <p>{fact}</p>}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
      {/* </section> */}
    </main>
  )
}

export default App
