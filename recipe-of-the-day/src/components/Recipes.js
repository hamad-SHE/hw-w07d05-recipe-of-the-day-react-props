import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';




class Recipes extends Component{
    renderRecipes(){
        const renderEachRecipe = recipes.map((inRecipes,index)=>{
            return(
                <Recipe recipes={inRecipes} key={index}/>
            )
        })
        
        return renderEachRecipe;

    } 

    render(){
        return (
            <div className="Recipes">

            <h1 id='subjectOfRecipes'>Ricepes</h1>
            <strong>{this.renderRecipes()}</strong>
            
            
            
            
            </div>

        )
    }
}

export default Recipes;