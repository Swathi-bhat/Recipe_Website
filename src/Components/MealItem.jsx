import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const MealItem = ({ data, addToFavorites }) => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(true);

  const handleClick = (e, item) => {
    e.stopPropagation();
    addToFavorites(item);
    console.log('Added to favorites:', item);
  };

  return (
    <>
      {!data ? (
        <div>Not Found</div>
      ) : (
        data.map(item => (
          <div className="card" key={item.idMeal} 
          onClick={() => navigate(`/${item.idMeal}`)}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
            <button style={{ width: 160, background: "red", color: "white" }} 
            onClick={(e) => handleClick(e, item)}>

              <FontAwesomeIcon icon={faHeart} style={{ marginRight: '5px' }} />
              Add to Favorites

            </button>
          </div>
        ))
      )}
    </>
  );
};
