import React from 'react';

const Burger = (props) => (
    <>
    <hr/>
        <h2>Burger Time!</h2>  
        <img src="https://www.redmillburgers.com/images/splctr.png" alt="Red Mill"/>  
        
        {props.usedIngredients.map((usedIngredient, i) =>  <p key={i} style={{backgroundColor: usedIngredient.color}}>{usedIngredient.name}</p>)}            
        
        <button onClick={props.clearStack}>Clear</button>
    </>
)
export default Burger;