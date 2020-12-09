import React, { Component } from "react"
import '../stylesheets/Pokegame.css'
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
        }
    render() {
      let firstHand = []
      let secondHand = [ ...this.props.pokemon ]

        while (firstHand.length < secondHand.length) {
          let index = Math.floor(Math.random() * secondHand.length );
          let randomPokemon = secondHand.splice(index, 1)[0];
          firstHand.push(randomPokemon);
        }

      let exp1 = firstHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0 );
      let exp2 = secondHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0 );


        return (
          <div>
            <h1>Pokegame!</h1>
            <Pokedex pokemon = { firstHand } hand = "First" exp = {exp1} isWinner = { exp1 > exp2}/>
            <Pokedex pokemon = { secondHand } hand = "Second" exp = {exp2} isWinner = { exp2 > exp1}/>
          </div>
        )
    }
}

export default Pokegame;

        // const get_random =  (list) => {
        //   return list[Math.floor((Math.random()*list.length))];
        // } 
        // console.log(get_random(this.props.pokemon))