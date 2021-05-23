import React, {Component} from "react";
import {IngredientContext} from "./App";

export default class Ingredient extends Component{
    constructor(props) {
        super(props);
        this.state={
            ingredient:this.props.ingredient
        }
    }

    render(){
        return(
            <IngredientContext.Consumer>
                {
                    (cnt)=>{
                        return(
                            <div className="col-2 col-sm-6 col-md-2">

                                <button type="button" className="btn btn-outline-warning my-1 " onClick={()=>{cnt.changeIngredient(this.state.ingredient.strIngredient1)}}>{this.state.ingredient.strIngredient1}</button>
                            </div>
                        )
                    }
                }
            </IngredientContext.Consumer>
        )
    }

}
