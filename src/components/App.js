import React, {Component} from "react";
import Ingredients from "./Ingredients";
import Drinks from "./Drinks";


export const IngredientContext = React.createContext()

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            ingredient:null,
        }
    }

    changeIngredient=(data)=>{
        this.setState({ ingredient:data})
    }

    renderDrinks = () => {
        if (this.state.ingredient)  {
            return (
                <section className="drinks-container">
                    <Drinks ingredient={this.state.ingredient} />
                </section>
            )
        }
    }

render(){
        return(
            <IngredientContext.Provider value={{changeIngredient:this.changeIngredient}}>
                <section className="ingredient-container">
                    <Ingredients/>
                </section>
                {this.renderDrinks()}
            </IngredientContext.Provider>

        )
}



}