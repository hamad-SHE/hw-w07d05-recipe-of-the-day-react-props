import React, { } from 'react';

const Ingredient = (props) =>{
    const component = props.ingredient;

    return(
        <div className="Ingredient">
        
            <p>Ingredient : {component.ingredient}</p>
            <p>amount : {component.ingredient}</p>
        
        
        
        
        
        </div>
    )
}

export default Ingredient;