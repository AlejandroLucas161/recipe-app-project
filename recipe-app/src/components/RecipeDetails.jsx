import React from 'react';
import { useParams } from 'react-router-dom';

import style from './recipe.module.css'

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => (recipe.id).toString() === id);

  console.log(recipe);
  return(
    <div className={style.recipe}>
      <h1>{recipe.label}</h1>
      <span>{recipe.dietLabels}</span>
    </div>
  )
}


export default RecipeDetails;