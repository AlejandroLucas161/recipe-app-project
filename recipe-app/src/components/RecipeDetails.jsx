import React from 'react';
import arrow from '../assets/images/arrow.svg'
import { useParams, Link } from 'react-router-dom';

import style from './details.module.css'

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => (recipe.id).toString() === id);
  const { ingredients } = recipe;
  console.log(ingredients);

  console.log(recipe);
  return(
    <div className={style.details_container}>
      <Link exact to='/'>
        <img className={style.arrow} src={arrow}/>
      </Link>

      <div className={style.details}>
        <img src={recipe.image} />      
        <h1>{recipe.label}</h1>
        <ul className={style.ingredients}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
          ))}
        </ul>
        <p>Diet: <b>{recipe.dietLabels}</b></p>
        <p>Meal type: <b>{recipe.mealType}</b></p>
        <p>More details: <b><a href={recipe.url} target='_blank'>{recipe.source}</a></b></p>
      </div>
    </div>
  )
}


export default RecipeDetails;