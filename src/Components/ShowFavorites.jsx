import React from 'react';
import { useNavigate } from 'react-router';

export const ShowFavorites = ({ favorites,addToFavorites }) => {
  const navigate = useNavigate();
  const handleRemoveFavorite = (e, favorite) => {
    e.stopPropagation(); 
    addToFavorites(favorite);
  };
  return (
    <div>
      <h1 style={{margin:"20px",textAlign:"center",fontWeight:"bold"}}>Favorites</h1>
      {favorites.length === 0 ? (
        <h3 style={{textAlign:"center",marginTop:20}}>No favorites added yet !</h3>
      ) : (
        <div style={{display:"flex",gap:"50px",flexWrap:"wrap",margin:"50px 150px"}}>
          {favorites.map(favorite => (
            <div className="card" key={favorite.idMeal} onClick={() => navigate(`/${favorite.idMeal}`)}>
            <div key={favorite.id}>
              <img src={favorite.strMealThumb} alt={favorite.strMeal} />
              <h3>{favorite.strMeal}</h3>
              <button onClick={(e) => handleRemoveFavorite(e, favorite)} style={{width:"160px"}}>Remove Favorites</button>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};