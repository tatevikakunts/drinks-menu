import React, {Component} from "react";
import {IngredientContext} from "./App";

export default class Ingredient extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <IngredientContext.Consumer>
                {
                    (cnt)=>{
                        return(
                            <div className="ingredient-btnlist">
                                <button type="button" onClick={()=>{cnt.changeIngredient(this.props.ingredient.strIngredient1)}}>{this.props.ingredient.strIngredient1}</button>
                            </div>
                        )
                    }
                }
            </IngredientContext.Consumer>
        )
    }

}
