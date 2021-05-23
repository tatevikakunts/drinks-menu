import React from "react";

const Drink = ({drink})=>{
    return(
        <div className="drink-wrapper">
            <div className="drink-card">
                <h2 className="overlay-heading">{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt="" className="drink-img"/>

            </div>
        </div>
    )
}
export default Drink
