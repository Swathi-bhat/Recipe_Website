import React, { useEffect, useState } from 'react';
import { MealItem } from './MealItem';
import { RecipeIndex } from './RecipeIndex';
import { Link } from 'react-router-dom';

export const Meal = ({ addToFavorites }) => {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals);
        setItem(data.meals);
      })
      .catch(error => console.error('Error fetching meal data:', error));
  }, [url]);
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (evt) => {
    if (evt.key === 'Enter') {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <div className='main'>

        <div className='heading'>
          <h1 style={{ color: "black",fontSize:60}}><b style={{color:"red"}}>Kitchen Delight Recipe</b> </h1>
          
        </div>
        
        
        <div className="searchbox">
          <input 
          type="search" 
          placeholder="Search here" 
          className="search-bar" 
          onChange={e => setSearch(e.target.value)} 
          onKeyPress={searchRecipe} />
        </div>
        <div className="container">
          <MealItem data={item} addToFavorites={addToFavorites} />
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>

        <div>
          <Link to="/showfavorites" > <button style={{ width: "250px", color: "red", background: "white" }} >Go to Favorites</button></Link>
        </div>
      </div>
    </>
  );
};
