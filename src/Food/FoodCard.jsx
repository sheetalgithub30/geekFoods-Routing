import React from 'react'
import './FoodCard.css'

function FoodCard({title,ingredient,instructions}) {
  return (
    <div id="foodCard">
        <p id="heading"><span>Title </span>{title}</p>
        <p><span>Ingredients </span>{ingredient}</p>
        <p><span>Instructions </span>{instructions}</p>
    </div>
  )
}

export default FoodCard