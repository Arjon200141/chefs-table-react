import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleRecipe}) => {
    const [recipes , setRecipes] = useState([])
    

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[] )

    
    //   console.log(cart)
    return (
            <div className=" grid grid-cols-2 col-span-4 gap-4">
                {
                    recipes.map(recipe => <Recipe 
                        key={recipe.recipe_id} 
                        recipe={recipe}
                        handleRecipe={handleRecipe}
                        >
                        </Recipe>)
                }
            </div>
    );
};

Recipes.prototype = {
    handleRecipe : PropTypes.func.isRequired
    
}
export default Recipes;