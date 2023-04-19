import React from 'react'
import Container from './Card.styled'
import { useNavigate } from 'react-router-dom'

const Card = ({title, image, details, link}) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(link)}>
      <div className="card-inner-container">
        <h1 className="card-title">{title}</h1>
        <img src={image} alt={title} className="card-img"/>
        <h2 className="card-details">{details ? details : ""}</h2>
      </div>
    </Container>  
  )
}

export default Card