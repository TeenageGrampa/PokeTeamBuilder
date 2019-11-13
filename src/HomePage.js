import React, { Component } from 'react';
import PokeCard from './PokeCard'
import { Link } from 'react-router-dom'



class HomePage extends Component {

    state={
        AllPokemon: []
    }

    async componentDidMount(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
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
            <Link to="/NewTeam">Create Team</Link>
        </div>
        );
    }
}

export default HomePage;