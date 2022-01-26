import { Fragment } from "react"

import Message from "./Message"
import RecipePreview from "./RecipePreview"

import style from './message.module.css';


const Results = ({ query, recipes }) => {
  return (
    <div>    
    {recipes.length ? (
      <Fragment>
        <h2 className={style.message}>These are the results for your search: <b>{query}</b></h2>
        
        <div className='recipes'>
            {recipes.map((recipe) => (
              <RecipePreview 
                key={recipe.label}    
                title={recipe.label} 
                calories={recipe.calories} 
                image={recipe.image}
                source={recipe.source}
                id={recipe.id}
              />
            ))}
          </div>
        </Fragment>
      ) : (
        <Message message={query ? 'No recipes found, try other ingredient' : 'Start looking for recipes'} />
      )}
    </div>
  )
}

export default Results
