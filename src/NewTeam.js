import React, { Component } from 'react';
import PokeCard from './PokeCard'
import { connect } from 'react-redux'


class NewTeam extends Component {

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
            <div className="box" style={{borderStyle: 'ridge', boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
                <h1>Name: {this.state.currentPokemon.name}</h1>
                <p>id: {this.state.currentPokemon.id}</p>
                <p>type:</p>
                <ul>
                    {this.getTypes()}
                </ul>
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
                <p>base experience: {this.state.currentPokemon.base_experience}</p>
                <p>abillities</p>
                <ul>
                {this.getabilitys()}
                </ul>
                <button onClick={() => this.props.AddSlot1(this.state.currentPokemon)}>Add to Team slot 1</button>
                <button onClick={() => this.props.AddSlot2(this.state.currentPokemon)}>Add to Team slot 2</button>
                <button onClick={() => this.props.AddSlot3(this.state.currentPokemon)}>Add to Team slot 3</button>
                <button onClick={() => this.props.AddSlot4(this.state.currentPokemon)}>Add to Team slot 4</button>
                <button onClick={() => this.props.AddSlot5(this.state.currentPokemon)}>Add to Team slot 5</button>
                <button onClick={() => this.props.AddSlot6(this.state.currentPokemon)}>Add to Team slot 6</button>
            </div>
            : null}
        </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
      currentTeam: store.currentTeam
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      LogIn: (loggedInUser) => {
        dispatch({ type: 'LOGIN_CURRENT_USER', user: loggedInUser })
      },
      AddSlot1: (pokemon) => {
          dispatch({ type: 'Add_to_team_slot_1', slot1: pokemon})
      },
     AddSlot2: (pokemon) => {
        dispatch({ type: 'Add_to_team_slot_2', slot2: pokemon})
      },
     AddSlot3: (pokemon) => {
        dispatch({ type: 'Add_to_team_slot_3', slot3: pokemon})
      },
      AddSlot4: (pokemon) => {
        dispatch({ type: 'Add_to_team_slot_4', slot4: pokemon})
      },
      AddSlot5: (pokemon) => {
        dispatch({ type: 'Add_to_team_slot_5', slot5: pokemon})
      },
     AddSlot6: (pokemon) => {
        dispatch({ type: 'Add_to_team_slot_6', slot6: pokemon})
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTeam);