import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { CardContent } from '@material-ui/core';
const Restaurant =()=>{
    // const Recipes = UseRequestData ([], `${BASE_URL}/restaurants/:restaurantId`)
    // console.log(Recipes)
    // const RecipeCards = Recipes.map((recipe)={
    //     return (
    //         <RecipeCards
    //         Key= {recipe.recipe_id}
    //         title ={recipe.title}
    //         image= {recipe.image}
    //          onclick ={()=>null}/>
    //     )
    // })
    return(
           <CardContent>
               {/* {recipeCards} */}
               <p>Olá area de Deatalhes do Restaurant</p>
           <div>
               <p>Principais</p>
               <title>
                   Nome do Prato
               </title>
               <description>
                   <p>
                       descrição do pratoa aqui 
                   </p>
               </description>
               <value>
                   <p>
                       valor do prato 
                   </p>
               </value>
               <button>
                   Adicionar 
               </button>
           </div>
           <div>
               <p>Acompanhamento</p>
           </div>

           </CardContent>
           
      
    )
}
export default Restaurant;