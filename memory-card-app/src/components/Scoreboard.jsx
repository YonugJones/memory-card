import '../styles/Scoreboard.css'

export default function Scoreboard({ score, bestScore }) {
  return (
    <div className='scoreboard'>
      <div>Score: {score}</div>
      <div>Test Your PokéMemory! Select Each Pokémon Once! Refresh For New Pokémon!</div>
      <div>Best Score: {bestScore}</div>
    </div>
  )
}