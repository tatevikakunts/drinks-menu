import React, {Component, Fragment} from "react";
import Ingredients from "./Ingredients";
import Drinks from "./Drinks";
import "bootstrap/dist/css/bootstrap.min.css"


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
                <section className="container modal-window">
                    <Drinks ingredient={this.state.ingredient} />
                </section>
            )
        }
    }

render(){
        return(
            <Fragment>
                <IngredientContext.Provider value={{changeIngredient:this.changeIngredient}}>
                    <section className="ingredient-container">
                        <Ingredients/>
                    </section>

                </IngredientContext.Provider>
                {this.renderDrinks()}
            </Fragment>

        )
}

}