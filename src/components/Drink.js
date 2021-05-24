import React from "react";

const Drink = ({drink})=>{
    return(
        <div className="col-md-3">
            <div className="card p-3 mb-2 border-1 border-warning">
                <img src={drink.strDrinkThumb} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{drink.strDrink}</h2>

                </div>



            </div>
        </div>
    )
}
export default Drink
