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
            show:true,
        }
    }

    changeIngredient=(data)=>{
        this.setState({ ingredient:data})
    }

    changeShow=()=>{
        this.setState({show: true})
    }


    renderDrinks = () => {
        if (this.state.ingredient)  {
            return (
                        <section >

                            {
                                this.state.show?<div className=" modal-window hide block"><Drinks ingredient={this.state.ingredient} />
                                    <div id="closeBtn" onClick={()=>this.setState({show:!this.state.show})} >X</div>
                                </div>:null
                            }

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