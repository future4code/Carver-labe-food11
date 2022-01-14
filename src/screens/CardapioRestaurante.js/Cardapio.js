import React from "react";
import { BASE_URL } from "../../constantes/urls";
import useRequestData from "../../hooks/useRequestData";
 
const Cardapio =()=>{
    const Recipes = useRequestData([],`${BASE_URL}`)
    console.log(Recipes)

    return (
        <div>
            <h1>Olá esse é o cardapio</h1>

           
        </div>
    )
}
export default Cardapio ;