import '../styles/Card.css'

export default function Card({ image, onClick }) {
  return (
    <div className='card' onClick={() => onClick(image.id)}>
      <img src={image.image} alt={image.name} />
    </div>
  )
}