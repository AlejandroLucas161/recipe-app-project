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
    <div className={style.container}>
      <Link exact to='/'>
        <img className={style.arrow} src={arrow}/>
      </Link>
      <div className={style.detailsContainer}>
        <div className={style.details}>
          <div className={style.detailsContent}>
            <div className={style.imageContainer}>
              <img src={recipe.image} />      
            </div>
            <div className={style.ingredientsContainer}>
              <h1>{recipe.label}</h1>
              <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
                ))}
              </ul>
              {recipe.dietLabels.length > 0 && <p>Diet: <b>{recipe.dietLabels}</b></p>}
              <p>Meal type: <b>{recipe.mealType}</b></p>
              <p>More details: <b><a href={recipe.url} target='_blank'>{recipe.source}</a></b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default RecipeDetails;