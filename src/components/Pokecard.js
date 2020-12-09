import React, { Component } from "react"
import '../stylesheets/Pokecard.css'
const NEW_POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
    render() {
        const numberPadding = () => {
            if (this.props.id < 10){
                return `${NEW_POKE_API}00${this.props.id}.png`
            }else if (this.props.id < 100){ 
                return `${NEW_POKE_API}0${this.props.id}.png` 
            }else{
                return `${NEW_POKE_API}${this.props.id}.png` 
            }
        }
        let link = numberPadding()
        return (
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img src={link} alt={this.props.name}/>
                <div>type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;