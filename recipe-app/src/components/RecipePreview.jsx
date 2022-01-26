import React from 'react';
import { Link } from 'react-router-dom';

import style from './recipe.module.css'

const RecipePreview = ({ title, calories, image, source, id }) => {
  return(
    <Link to={`/details/${id}`} className={style.recipe}>
      <img className={style.image} src={image} />      

      <h1>{title}</h1>
      
      <p>Calories: <b>{Math.round(calories)}</b></p>
    
      <p>From: <b>{source}</b></p>
    </Link>
  )
}

export default RecipePreview;
