import React from 'react';

import style from './recipe.module.css'

const RecipePreview = ({ title, calories, image, source }) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      
      <p>{calories}</p>
    
      <p>From <b>{source}</b></p>

      <img className={style.image} src={image} />      
    </div>
  )
}

export default RecipePreview;
