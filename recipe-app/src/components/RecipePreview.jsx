import React from 'react';
import { Link } from 'react-router-dom';

import style from './recipe.module.css'

const RecipePreview = ({ title, calories, image, source, id }) => {
  return(
    <Link to={`/details/${id}`} className={style.recipe}>
      <h1>{title}</h1>
      
      <p>{calories}</p>
    
      <p>From <b>{source}</b></p>

      <img className={style.image} src={image} />      
    </Link>
  )
}

export default RecipePreview;
