import React, { Component } from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component{
    renderIngredients(){
        const eachIngredientInRecipe = recipeOfTheDay.ingredients.map((inGredient, index)=>{
            return (
                <Ingredient ingredient={inGredient} key={index}/>
            )
        })
        return eachIngredientInRecipe;
    }
    render(){
        return (
            <div className="RecipeOfTheDay">
            <h2 className='subject'>Recipe Of the Day</h2>
            <h3>{recipeOfTheDay.name}</h3>
            <h3 className="discraptionOfSubject">Dicriptetion amount</h3>
            <h3>{recipeOfTheDay.description}</h3>
            <h3 className='intgreted'>intgreted</h3>
            <h3>{this.renderIngredients}</h3>
            </div>
        )
    }
}
export default RecipeOfTheDay;
