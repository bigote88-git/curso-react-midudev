import './App.css'
import { useCatImage } from './hook/useCatImage'
import { useCatFact } from './hook/usetCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Randoms Fact Cats</h1>
      <button onClick={handleClick}>Generate random fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && 
        <img src={imageUrl} alt={`Imagen generate randomly from cataas for the phrase ${fact}`} />}
    </main>
  )
}

