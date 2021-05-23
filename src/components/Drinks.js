import React, {Component} from "react";
import {URL} from "../data/data";
import Drink from "./Drink";

export default class Drinks extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            drinks:null,
            error:null
        }
    }
    renderDrinks=()=>{
        if(this.state.isLoading && !this.state.error){
            return(
                <div>Loading...</div>
            )
        }else if(this.state.error){
            return(<div>{this.state.error}</div>)
        }
        return(this.state.drinks.map((drink)=>(<Drink key={drink.idDrink} drink={drink}/>)))
    }
    componentDidMount() {
        fetch(`${URL}filter.php?i=${this.props.ingredient}`)
            .then(response=>response.json())
            .then(data=> {
                this.setState({isLoading: false, drinks: data.drinks})
            })
            .catch(error=>this.setState({...this.state, error: error.message}))

    }

    render(){
        return(
            <div className="drink-div">
                {this.renderDrinks()}
            </div>
        )
    }
}
