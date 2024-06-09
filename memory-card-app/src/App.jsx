import { useState, useEffect } from 'react'
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import { getRandomPokemonIds, fetchPokemonData, shuffleArray } from './api/api';
import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ids = getRandomPokemonIds(30, 1000);
      const pokemonData = await fetchPokemonData(ids);
      setImages(pokemonData)
    }
    fetchData();
  }, [])

  function handleCardClick(id) {
    if (clickedImages.includes(id)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setClickedImages([...clickedImages, id])
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1)
      }
    }
    shuffleImages();
  }

  function shuffleImages() {
    setImages(shuffleArray([...images]))
  }

  return (
    <div className='app'>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardContainer images={images} onCardClick={handleCardClick} />
    </div>
  )
}