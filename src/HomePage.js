import React, { Component } from 'react';
import PokeCard from './PokeCard'


class HomePage extends Component {

    state={
        AllPokemon: []
    }

    async componentDidMount(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const json = await response.json()
        console.log(json)
        this.setState({
            AllPokemon: json.results
        })
    }
    render () {
        const PokemonCards = this.state.AllPokemon.map(pokemon => <PokeCard pokemon={pokemon}/>)
        return (
        <div className="container" >
            <h1>Welcome</h1>
            <h2>All Pokemon</h2>
            {PokemonCards}
        </div>
        );
    }
}

export default HomePage;