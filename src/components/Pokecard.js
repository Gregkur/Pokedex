import React, { Component } from "react"
import '../stylesheets/Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div>{this.props.type}</div>
                <div>{this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;