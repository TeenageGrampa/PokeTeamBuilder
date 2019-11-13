import React, { Component } from 'react';
import PokeCard from './PokeCard'


class HomePage extends Component {

    state={
        AllPokemon: []
    }

    handleChange = async (e) =>{
        const pokeRes = await fetch(`${e.target.value}`)
        const pokejson = await pokeRes.json()
        console.log(pokejson)
        this.setState({
            currentPokemon: pokejson
        })
    }

    async componentDidMount(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=964')
        const json = await response.json()
        console.log(json)
        this.setState({
            AllPokemon: json.results
        })
    }

    getabilitys = () => {
        const pokeability = this.state.currentPokemon.abilities.map(ability => <li>{ability.ability.name}</li>)
        return pokeability
    }

    getTypes = () => {
        const poketype = this.state.currentPokemon.types.map(type=> <li>{type.type.name}</li>)
        return poketype
    }
    render () {
        console.log(this.state)
        // const pokeability = this.state.currentPokemon.abilities.map(ability => <li>{ability.ability.name}</li>)
        const pokeoptions = this.state.AllPokemon.map(pokemon => <option value={pokemon.url} >{pokemon.name}</option>)
        return (
        <div className="container" >
            <h1>Choose your pokemon:</h1>
            <select className="select" onChange={this.handleChange}>
                {pokeoptions}
            </select>
            {this.state.currentPokemon ? 
            <div className="box">
                <h1>Name: {this.state.currentPokemon.name}</h1>
                <p>id: {this.state.currentPokemon.id}</p>
                <p>type:</p>
                <ul>
                    {this.getTypes()}
                </ul>
                <p>base experience: {this.state.currentPokemon.base_experience}</p>
                <img src={this.state.currentPokemon.sprites.front_default} />
                <p>stats:</p>
                <ul>
                    <li>{this.state.currentPokemon.stats[0].stat.name} - {this.state.currentPokemon.stats[0].base_stat}</li>
                    <li>{this.state.currentPokemon.stats[1].stat.name} - {this.state.currentPokemon.stats[1].base_stat}</li>
                    <li>{this.state.currentPokemon.stats[2].stat.name} - {this.state.currentPokemon.stats[2].base_stat}</li>
                    <li>{this.state.currentPokemon.stats[3].stat.name} - {this.state.currentPokemon.stats[3].base_stat}</li>
                    <li>{this.state.currentPokemon.stats[4].stat.name} - {this.state.currentPokemon.stats[4].base_stat}</li>
                    <li>{this.state.currentPokemon.stats[5].stat.name} - {this.state.currentPokemon.stats[5].base_stat}</li>
                </ul>
                <p>abillities</p>
                <ul>
                {this.getabilitys()}
                </ul>
            </div>
            : null}
        </div>
        );
    }
}

export default HomePage;