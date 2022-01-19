import React from 'react';

import style from './recipe.module.css'

const RecipeDetails = ({ recipe }) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.foodId}>{ingredient.text}</li>
        ))}
      </ul>

      <p>{calories}</p>

      <img className={style.image} src={image} />      
    </div>
  )
}


export default RecipeDetails;