import Message from "./Message"
import RecipePreview from "./RecipePreview"

const Results = ({ query, recipes }) => {
  return (
    <div>
      {recipes.length ? (
        <div className='recipes'>
          {recipes.map(({ recipe }) => (
            <RecipePreview 
              key={recipe.label}    
              title={recipe.label} 
              calories={recipe.calories} 
              image={recipe.image}
              source={recipe.source}
            />
          ))}
        </div>
      ) : (
        <Message message={query ? 'No recipes found, try other ingredient' : 'Start looking for recipes'} />
      )}
    </div>
  )
}

export default Results
