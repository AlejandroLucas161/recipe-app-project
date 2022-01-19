import React, { useState, useEffect } from 'react';

import Results from './components/Results';

import recipesMock from './data/recipesMock.json'
import spinner from './assets/images/spinner.svg'
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
    
    console.log(data.hits);
    setRecipes(data.hits);
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
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />

        <button className='search-btn' type='submit'>
          Search
        </button>
      </form>  

      {loading ? (
        <img src={spinner} />
      ) : (
        <Results query={query} recipes={recipes} />
      )}      
    </div>
  );
};

export default App;
