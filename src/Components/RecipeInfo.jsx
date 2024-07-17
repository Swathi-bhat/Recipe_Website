import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice,faBookOpen } from '@fortawesome/free-solid-svg-icons';
let vId = "";

export const RecipeInfo = () => {
    const [item, setItem] = useState();
    const { MealId } = useParams();
    if (MealId != "") {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals[0]);
            })
    }
    if (item) {
        const url = item.strYoutube;
        const str = url.split("=");
        vId = str[str.length - 1];
    }
    return (
        <>
            {
                (!item) ? "" : (
                    <>
                        <div className='content'>
                            <div className='flexprop'>
                                <div className="inner-content">
                                    <h1 style={{ color: "white", fontSize: "50px", fontWeight: "Bold" }}>{item.strMeal}</h1>
                                    <h2 style={{ color: "white", letterSpacing: "0.5rem" }}><i>{item.strArea} </i>Food</h2>
                                    <h3 style={{ color: "white" }}>Category<i> {item.strCategory}</i></h3>

                                </div>
                                <div><img src={item.strMealThumb} alt="" /></div>
                            </div>

                        </div>
                        
                        <div className="recipe-details">
                            <div className="ingredients">
                                <div style={{display:"flex",gap:5}}>
                                <h3> <FontAwesomeIcon icon={faPizzaSlice} style={{color:"red"}}/></h3>
                                    <h2>Ingredients</h2>
                                </div>
                                <h4>{item.strIngredient1}<br></br>{item.strMeasure1}</h4>
                                <h4>{item.strIngredient2}<br/>{item.strMeasure2}</h4>
                                <h4>{item.strIngredient3}<br/>{item.strMeasure3}</h4>
                                <h4>{item.strIngredient4}<br/>{item.strMeasure4}</h4>
                                <h4>{item.strIngredient5}<br/>{item.strMeasure5}</h4>
                                <h4>{item.strIngredient6}<br/>{item.strMeasure6}</h4>
                                <h4>{item.strIngredient7}<br/>{item.strMeasure7}</h4>
                                <h4>{item.strIngredient8}<br/>{item.strMeasure8}</h4>

                            </div>
                            <div className="instructions">
                                <div style={{display:"flex",gap:5}}>
                                <h3> <FontAwesomeIcon icon={faBookOpen} style={{color:"red"}}/></h3>

                                <h2>Instructions</h2>
                                </div>
                                <h4>{item.strInstructions}</h4>
                            </div>
                            

                        </div>
                        <div className="video">
                            <iframe src={`https://www.youtube.com/embed/${vId}`}>
                            </iframe>
                        </div>
                       
                    </>
                )
            }
        </>
    )
}
