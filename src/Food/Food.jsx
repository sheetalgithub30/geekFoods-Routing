import React, { useEffect, useState } from 'react'
import './Food.css'
import FoodCard from './FoodCard';

function Food() {
    const [data,setData]= useState([]);


useEffect(()=>{
    async function getFood(){
        const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd30b549b5cmsh39886e10e7446e6p1ebc4bjsnfc5d815c7e96',
                'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            setData(result);
        } catch (error) {
            console.error(error);
        }

    }

    getFood();
},[])
  return (
    <div id="ingredients">
    <h1>Recipe & Ingredients</h1>
    <div id="food">
     {
        data.map((ing)=>{
          return  <FoodCard title={ing.title} ingredient={ing.ingredients} instructions={ing.instructions} ></FoodCard>
        })
     }
    </div>
    </div>
  )
}

export default Food