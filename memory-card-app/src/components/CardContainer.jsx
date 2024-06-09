import '../styles/CardContainer.css'
import Card from './Card'

export default function CardContainer({ images, onCardClick }) {
  return (
    <div className='cardContainer'>
      {images.map(image => (
        <Card key={image.id} image={image} onClick={onCardClick} />
      ))}
    </div>
  )
}