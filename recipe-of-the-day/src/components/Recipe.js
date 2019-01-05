import React, {  } from 'react';




const Recipe = (props) => {
    const renderEachRecipe = props.recipes;

    return (
        <div className="Recipe">
        <ul>
            <li>name : {renderEachRecipe.name}</li>
            <li>servings : {renderEachRecipe.servings}</li>
            <li>category : {renderEachRecipe.category}</li>
        </ul>
        
        
        
        
        
        </div>
    )
}

export default Recipe ;


