import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    // Fetch images from API and set them in state
    fetchImages();
  }, [])

  async function fetchImages() {
    // implement API call here and set images
  }

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
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages)
  }

  return (
    <div className='app'>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardContainer images={images} onClick={handleCardClick} />
    </div>
  )
}
