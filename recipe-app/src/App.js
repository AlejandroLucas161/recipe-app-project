import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RecipeDetails from './components/RecipeDetails';

import recipesMock from './data/recipesMock.json'
import './App.css';

const App = ({ useMockedData }) => {
  const APP_ID = 'fc7202c8';
  const APP_KEY = '47b3515d11c8978e64392707a6a5411f';	

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(query) {
      getRecipes();
    }    
  }, [query])

  const getRecipes = async () => {
    setLoading(true);
    let data;

    if(useMockedData) {
      data = recipesMock;
    } else {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      data = await response.json();
    }

    setRecipes(data.hits.map((hit, i) => ({...hit.recipe, id: i})));
    console.log(data.hits.map((hit, i) => ({...hit.recipe, id: i})));
    setLoading(false);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
    <Switch>
      <Route exact path='/'>
        <HomePage
          query={query}  
          recipes={recipes} 
          loading={loading}
          search={search}
          getSearch={getSearch}
          updateSearch={updateSearch}
        />
      </Route>

      <Route path='/details/:id'>
        <RecipeDetails recipes={recipes} />
      </Route>
    </Switch>
    </div>
  );
};

export default App;
