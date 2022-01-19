import Message from "./Message"
import Recipe from "./Recipe"

const Results = ({ query, recipes }) => {
  return (
    <div>
      {recipes.length ? (
        <div className='recipes'>
          {recipes.map(({ recipe }) => (
            <Recipe 
              key={recipe.label} 
              title={recipe.label} 
              calories={recipe.calories} 
              image={recipe.image}
              ingredients={recipe.ingredients}
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
