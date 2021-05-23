import React, {Component} from "react";
import {URL} from "../data/data"
import Ingredient from "./Ingredient";

export default class Ingredients extends Component{
    constructor(props) {
        super(props);
        this.state={
            ingredients:null,
            isLoading:true,
            error:null
        }
    }
    renderIngredients(){
        if(this.state.isLoading && !this.state.error){
            return(<div>Loading...</div>)
        } else if (this.state.error){
            return(<div className="error">{this.state.error}</div>)
        }
        return(this.state.ingredients.map((ingredient)=>(<Ingredient key ={ingredient.strIngredient1} ingredient={ingredient}/>)))
    }
    componentDidMount() {
        fetch(`${URL}list.php?i=list`)
            .then(response=>response.json())
            .then(data=>this.setState({isLoading:false, ingredients:data.drinks}))
            .catch(error=>{this.setState({...this.state, error:error.message})})
    }
    render(){
        return(

                <div className="ingredient-div">
                    {this.renderIngredients()}
                </div>

        )
    }
}