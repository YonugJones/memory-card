import '../styles/Card'

export default function Card({ image, onClick }) {
  return (
    <div className='card' onClick={() => onClick(image.id)}>
      <img src={image.url} alt={image.title} />
    </div>
  )
}