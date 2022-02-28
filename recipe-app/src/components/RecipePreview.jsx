import React from 'react';
import { Link } from 'react-router-dom';

import style from './recipe.module.css'

const RecipePreview = ({ title, calories, image, source, id }) => {
  return(
    <Link to={`/details/${id}`} className={style.recipe}>
      <img className={style.image} src={image} />      

      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <p>Calories: <b>{Math.round(calories)}</b></p>
      </div>
      
      <div>
        <p>From: <b>{source}</b></p>
      </div>
      
    
    </Link>
  )
}

export default RecipePreview;
