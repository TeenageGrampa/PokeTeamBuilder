import React, { Component } from 'react';
import PokeCard from './PokeCard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class HomePage extends Component {

    state={
        AllPokemon: [],
        teamTypes: [],

    }

    async componentDidMount(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        const json = await response.json()
        console.log(json)
        this.setState({
            AllPokemon: json.results
        })
    }

    getTypes = (pokemon) => {
        const poketype = pokemon.types.map(type=> <li>{type.type.name}</li>)
        return poketype
    }

    getMoves = (pokemon) => {
        const pokemoves = pokemon.moves.map(move => <option value={move.move.url}>{move.move.name}</option>)
        return pokemoves
    }

    handleMoveSelect1_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot1Move1(movejson)
    }
    handleMoveSelect1_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot1Move2(movejson)
    }
    handleMoveSelect1_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot1Move3(movejson)
    }
    handleMoveSelect1_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot1Move4(movejson)
    }
    handleMoveSelect2_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot2Move1(movejson)
    }
    handleMoveSelect2_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot2Move2(movejson)
    }
    handleMoveSelect2_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot2Move3(movejson)
    }
    handleMoveSelect2_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot2Move4(movejson)
    }
    handleMoveSelect3_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot3Move1(movejson)
    }
    handleMoveSelect3_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot3Move2(movejson)
    }
    handleMoveSelect3_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot3Move3(movejson)
    }
    handleMoveSelect3_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot3Move4(movejson)
    }
    handleMoveSelect4_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot4Move1(movejson)
    }
    handleMoveSelect4_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot4Move2(movejson)
    }
    handleMoveSelect4_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot4Move3(movejson)
    }
    handleMoveSelect4_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot4Move4(movejson)
    }
    handleMoveSelect5_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot5Move1(movejson)
    }
    handleMoveSelect5_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot5Move2(movejson)
    }
    handleMoveSelect5_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot5Move3(movejson)
    }
    handleMoveSelect5_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot5Move4(movejson)
    }
    handleMoveSelect6_1 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot6Move1(movejson)
    }
    handleMoveSelect6_2 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot6Move2(movejson)
    }
    handleMoveSelect6_3 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot6Move3(movejson)
    }
    handleMoveSelect6_4 = async (e) =>{
        const moveRes = await fetch(`${e.target.value}`)
        const movejson = await moveRes.json()
        this.props.AddSlot6Move4(movejson)
    }

    handleAnalyze =() => {
        const slot1types = this.props.slot1.types.map(type => type.type.name)
        const slot2types = this.props.slot2.types.map(type => type.type.name)
        const slot3types = this.props.slot3.types.map(type => type.type.name)
        const slot4types = this.props.slot4.types.map(type => type.type.name)
        const slot5types = this.props.slot5.types.map(type => type.type.name)
        const slot6types = this.props.slot6.types.map(type => type.type.name)
        const typeArr = slot1types.concat(slot2types, slot3types, slot4types, slot5types, slot6types)
        const uniqtypes = Array.from(new Set(typeArr))
        const slot1type1 = this.props.slot1move1.type.name
        const slot1type2 = this.props.slot1move2.type.name
        const slot1type3 = this.props.slot1move3.type.name
        const slot1type4 = this.props.slot1move4.type.name
        const slot2type1 = this.props.slot2move1.type.name
        const slot2type3 = this.props.slot2move3.type.name
        const slot2type4 = this.props.slot2move4.type.name
        const slot2type2 = this.props.slot2move2.type.name
        const slot3type1 = this.props.slot3move1.type.name
        const slot3type2 = this.props.slot3move2.type.name
        const slot3type3 = this.props.slot3move3.type.name
        const slot3type4 = this.props.slot3move4.type.name
        const slot4type1 = this.props.slot4move1.type.name
        const slot4type2 = this.props.slot4move2.type.name
        const slot4type3 = this.props.slot4move3.type.name
        const slot4type4 = this.props.slot4move4.type.name
        const slot5type1 = this.props.slot5move1.type.name
        const slot5type2 = this.props.slot5move2.type.name
        const slot5type3 = this.props.slot5move3.type.name
        const slot5type4 = this.props.slot5move4.type.name
        const slot6type1 = this.props.slot6move1.type.name
        const slot6type2 = this.props.slot6move2.type.name
        const slot6type3 = this.props.slot6move3.type.name
        const slot6type4 = this.props.slot6move4.type.name
        const moveArr = [slot1type1, slot1type2, slot1type3, slot1type4, slot2type1, slot2type2, slot2type3, slot2type4, slot3type1, slot3type2, slot3type3, slot3type4, slot4type1, slot4type2, slot4type3, slot4type4, slot5type1, slot5type2, slot5type3, slot5type4, slot6type1, slot6type2, slot6type3, slot6type4,]
        const uniqmovArr = Array.from(new Set(moveArr))
        this.setState({
            teamTypes: uniqtypes, 
            moveTypes: uniqmovArr
        })
    }
    displayTeamTypes = () => {
        const typedis = this.state.teamTypes.map(type => <li>{type}</li>)
        return typedis
    }
    displayMoveTypes = () => {
        const typedis = this.state.moveTypes.map(type => <li>{type}</li>)
        return typedis
    }
    displayWeakness = () => {
        let weakArray = []
        if (this.state.teamTypes.includes('normal')){
            weakArray.push('fighting')
        }
        if (this.state.teamTypes.includes('fightng')){
            weakArray.push('flying')
            weakArray.push('psychic')
            weakArray.push('fairy')
        }
        if (this.state.teamTypes.includes('flying')){
            weakArray.push('rock')
            weakArray.push('ice')
            weakArray.push('electric')
        }
        if (this.state.teamTypes.includes('poison')){
            weakArray.push('fighting')
            weakArray.push('steel')
            weakArray.push('water')
            weakArray.push('grass')
        }
        if (this.state.teamTypes.includes('ground')){
            weakArray.push('water')
            weakArray.push('grass')
            weakArray.push('ice')
        }
        if (this.state.teamTypes.includes('rock')){
            weakArray.push('fighting')
            weakArray.push('steel')
            weakArray.push('water')
            weakArray.push('grass')
        }
        if (this.state.teamTypes.includes('bug')){
            weakArray.push('flying')
            weakArray.push('rock')
            weakArray.push('fire')
        }
        if (this.state.teamTypes.includes('ghost')){
            weakArray.push('ghost')
            weakArray.push('dark')
        }
        if (this.state.teamTypes.includes('steel')){
            weakArray.push('fighting')
            weakArray.push('ground')
            weakArray.push('fire')
        }
        if (this.state.teamTypes.includes('fire')){
            weakArray.push('ground')
            weakArray.push('rock')
            weakArray.push('water')
        }
        if (this.state.teamTypes.includes('water')){
            weakArray.push('electric')
            weakArray.push('grass')
        }
        if (this.state.teamTypes.includes('grass')){
            weakArray.push('ice')
            weakArray.push('fire')
            weakArray.push('bug')
            weakArray.push('poison')
            weakArray.push('flying')
        }
        if (this.state.teamTypes.includes('electric')){
            weakArray.push('ground')
        }
        if (this.state.teamTypes.includes('psychic')){
            weakArray.push('dark')
            weakArray.push('ghost')
            weakArray.push('bug')
        }
        if (this.state.teamTypes.includes('ice')){
            weakArray.push('fighting')
            weakArray.push('steel')
            weakArray.push('rock')
            weakArray.push('fire')
        }
        if (this.state.teamTypes.includes('dragon')){
            weakArray.push('fairy')
            weakArray.push('ice')
            weakArray.push('dragon')
        }
        if (this.state.teamTypes.includes('dark')){
            weakArray.push('fighting')
            weakArray.push('bug')
            weakArray.push('fairy')
        }
        if (this.state.teamTypes.includes('fairy')){
            weakArray.push('poison')
            weakArray.push('steel')
        }
        const uniqWeakArr = Array.from(new Set(weakArray))
        const weakdis = uniqWeakArr.map(type => <li>{type}</li>)
        return weakdis
    }

    render () {
        console.log(this.state)
        console.log(this.props)
        return (
        <div className="container" >
            <h1>Welcome</h1>
            {this.props.slot1 && this.props.slot2 && this.props.slot3 && this.props.slot4 && this.props.slot5 && this.props.slot6 ?
            <button onClick={this.handleAnalyze}>Analyze Team</button>
            :null}
            {this.state.teamTypes.length > 0 ? 
            <div classname="columns box">
                <div classname="column is-4">
                <p>Your Team has the current types:</p>
                <ul>{this.displayTeamTypes()}</ul>
                </div>
                <div classname="column is-4">
                <p>You currently have atacks of these types:</p>
                <ul>
                {this.displayMoveTypes()}
                </ul>
                </div>
                <div className="column is-4">
                    <p>Your weaknesses are:</p>
                    <ul>
                        {this.displayWeakness()}
                    </ul>
                </div>
            </div>
            : null}
            <h1>Current Team:</h1>
            { this.props.slot1 ? 
            <div className="box columns">
                <div className="column is-4">
                    <h1>Name: {this.props.slot1.name}</h1>
                    <p>type:</p>
                    <ul>
                        {this.getTypes(this.props.slot1)}
                    </ul>
                    <img src={this.props.slot1.sprites.front_default} />
                </div>
                <div className="column is-4">
                    <p>stats:</p>
                    <ul>
                        <li>{this.props.slot1.stats[0].stat.name} - {this.props.slot1.stats[0].base_stat}</li>
                        <li>{this.props.slot1.stats[1].stat.name} - {this.props.slot1.stats[1].base_stat}</li>
                        <li>{this.props.slot1.stats[2].stat.name} - {this.props.slot1.stats[2].base_stat}</li>
                        <li>{this.props.slot1.stats[3].stat.name} - {this.props.slot1.stats[3].base_stat}</li>
                        <li>{this.props.slot1.stats[4].stat.name} - {this.props.slot1.stats[4].base_stat}</li>
                        <li>{this.props.slot1.stats[5].stat.name} - {this.props.slot1.stats[5].base_stat}</li>
                    </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot1move1 ? this.props.slot1move1.name : null}</p>
                    <p>Type: {this.props.slot1move1 ? this.props.slot1move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect1_1}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 2: {this.props.slot1move2 ? this.props.slot1move2.name : null}</p>
                    <p>Type: {this.props.slot1move2 ? this.props.slot1move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect1_2}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 3: {this.props.slot1move3 ? this.props.slot1move3.name : null}</p>
                    <p>Type: {this.props.slot1move3 ? this.props.slot1move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect1_3}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 4: {this.props.slot1move4 ? this.props.slot1move4.name : null}</p>
                    <p>Type: {this.props.slot1move4 ? this.props.slot1move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect1_4}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot2 ? 
            <div className="box columns">
                <div className="column is-4">
                <h1>Name: {this.props.slot2.name}</h1>
                <p>type:</p>
                <ul>
                    {this.getTypes(this.props.slot2)}
                </ul>
                <img src={this.props.slot2.sprites.front_default} />
                </div>
                <div className="column is-4">
                <p>stats:</p>
                <ul>
                    <li>{this.props.slot2.stats[0].stat.name} - {this.props.slot2.stats[0].base_stat}</li>
                    <li>{this.props.slot2.stats[1].stat.name} - {this.props.slot2.stats[1].base_stat}</li>
                    <li>{this.props.slot2.stats[2].stat.name} - {this.props.slot2.stats[2].base_stat}</li>
                    <li>{this.props.slot2.stats[3].stat.name} - {this.props.slot2.stats[3].base_stat}</li>
                    <li>{this.props.slot2.stats[4].stat.name} - {this.props.slot2.stats[4].base_stat}</li>
                    <li>{this.props.slot2.stats[5].stat.name} - {this.props.slot2.stats[5].base_stat}</li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot2move1 ? this.props.slot2move1.name : null}</p>
                    <p>Type: {this.props.slot2move1 ? this.props.slot2move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect2_1}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 2: {this.props.slot2move2 ? this.props.slot2move2.name : null}</p>
                    <p>Type: {this.props.slot2move2 ? this.props.slot2move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect2_2}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 3: {this.props.slot2move3 ? this.props.slot2move3.name : null}</p>
                    <p>Type: {this.props.slot2move3 ? this.props.slot2move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect2_3}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 4: {this.props.slot2move4 ? this.props.slot2move4.name : null}</p>
                    <p>Type: {this.props.slot2move4 ? this.props.slot2move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect2_4}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot3 ? 
            <div className="box columns">
                <div className="column is-4">
                <h1>Name: {this.props.slot3.name}</h1>
                <p>type:</p>
                <ul>
                    {this.getTypes(this.props.slot3)}
                </ul>
                <img src={this.props.slot3.sprites.front_default} />
                </div>
                <div className="column is-4">
                <p>stats:</p>
                <ul>
                    <li>{this.props.slot3.stats[0].stat.name} - {this.props.slot3.stats[0].base_stat}</li>
                    <li>{this.props.slot3.stats[1].stat.name} - {this.props.slot3.stats[1].base_stat}</li>
                    <li>{this.props.slot3.stats[2].stat.name} - {this.props.slot3.stats[2].base_stat}</li>
                    <li>{this.props.slot3.stats[3].stat.name} - {this.props.slot3.stats[3].base_stat}</li>
                    <li>{this.props.slot3.stats[4].stat.name} - {this.props.slot3.stats[4].base_stat}</li>
                    <li>{this.props.slot3.stats[5].stat.name} - {this.props.slot3.stats[5].base_stat}</li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot3move1 ? this.props.slot3move1.name : null}</p>
                    <p>Type: {this.props.slot3move1 ? this.props.slot3move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect3_1}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 2: {this.props.slot3move2 ? this.props.slot3move2.name : null}</p>
                    <p>Type: {this.props.slot3move2 ? this.props.slot3move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect3_2}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 3: {this.props.slot3move3 ? this.props.slot3move3.name : null}</p>
                    <p>Type: {this.props.slot3move3 ? this.props.slot3move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect3_3}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 4: {this.props.slot3move4 ? this.props.slot3move4.name : null}</p>
                    <p>Type: {this.props.slot3move4 ? this.props.slot3move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect3_4}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot4 ? 
            <div className="box columns">
                <div className="column is-4">
                <h1>Name: {this.props.slot4.name}</h1>
                <p>type:</p>
                <ul>
                    {this.getTypes(this.props.slot4)}
                </ul>
                <img src={this.props.slot4.sprites.front_default} />
                </div>
                <div className="column is-4">
                <p>stats:</p>
                <ul>
                    <li>{this.props.slot4.stats[0].stat.name} - {this.props.slot4.stats[0].base_stat}</li>
                    <li>{this.props.slot4.stats[1].stat.name} - {this.props.slot4.stats[1].base_stat}</li>
                    <li>{this.props.slot4.stats[2].stat.name} - {this.props.slot4.stats[2].base_stat}</li>
                    <li>{this.props.slot4.stats[3].stat.name} - {this.props.slot4.stats[3].base_stat}</li>
                    <li>{this.props.slot4.stats[4].stat.name} - {this.props.slot4.stats[4].base_stat}</li>
                    <li>{this.props.slot4.stats[5].stat.name} - {this.props.slot4.stats[5].base_stat}</li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot4move1 ? this.props.slot4move1.name : null}</p>
                    <p>Type: {this.props.slot4move1 ? this.props.slot4move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect4_1}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 2: {this.props.slot4move2 ? this.props.slot4move2.name : null}</p>
                    <p>Type: {this.props.slot4move2 ? this.props.slot4move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect4_2}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 3: {this.props.slot4move3 ? this.props.slot4move3.name : null}</p>
                    <p>Type: {this.props.slot4move3 ? this.props.slot4move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect4_3}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 4: {this.props.slot4move4 ? this.props.slot4move4.name : null}</p>
                    <p>Type: {this.props.slot4move4 ? this.props.slot4move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect4_4}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot5 ? 
            <div className="box columns">
                <div className="column is-4">
                <h1>Name: {this.props.slot5.name}</h1>
                <p>type:</p>
                <ul>
                    {this.getTypes(this.props.slot5)}
                </ul>
                <img src={this.props.slot5.sprites.front_default} />
                </div>
                <div className="column is-4">
                <p>stats:</p>
                <ul>
                    <li>{this.props.slot5.stats[0].stat.name} - {this.props.slot5.stats[0].base_stat}</li>
                    <li>{this.props.slot5.stats[1].stat.name} - {this.props.slot5.stats[1].base_stat}</li>
                    <li>{this.props.slot5.stats[2].stat.name} - {this.props.slot5.stats[2].base_stat}</li>
                    <li>{this.props.slot5.stats[3].stat.name} - {this.props.slot5.stats[3].base_stat}</li>
                    <li>{this.props.slot5.stats[4].stat.name} - {this.props.slot5.stats[4].base_stat}</li>
                    <li>{this.props.slot5.stats[5].stat.name} - {this.props.slot5.stats[5].base_stat}</li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot5move1 ? this.props.slot5move1.name : null}</p>
                    <p>Type: {this.props.slot5move1 ? this.props.slot5move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect5_1}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 2: {this.props.slot5move2 ? this.props.slot5move2.name : null}</p>
                    <p>Type: {this.props.slot5move2 ? this.props.slot5move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect5_2}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 3: {this.props.slot5move3 ? this.props.slot5move3.name : null}</p>
                    <p>Type: {this.props.slot5move3 ? this.props.slot5move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect5_3}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 4: {this.props.slot5move4 ? this.props.slot5move4.name : null}</p>
                    <p>Type: {this.props.slot5move4 ? this.props.slot5move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect5_4}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot6 ? 
            <div className="box columns">
                <div className="column is-4">
                <h1>Name: {this.props.slot6.name}</h1>
                <p>type:</p>
                <ul>
                    {this.getTypes(this.props.slot6)}
                </ul>
                <img src={this.props.slot6.sprites.front_default} />
                </div>
                <div className="column is-4">
                <p>stats:</p>
                <ul>
                    <li>{this.props.slot6.stats[0].stat.name} - {this.props.slot6.stats[0].base_stat}</li>
                    <li>{this.props.slot6.stats[1].stat.name} - {this.props.slot6.stats[1].base_stat}</li>
                    <li>{this.props.slot6.stats[2].stat.name} - {this.props.slot6.stats[2].base_stat}</li>
                    <li>{this.props.slot6.stats[3].stat.name} - {this.props.slot6.stats[3].base_stat}</li>
                    <li>{this.props.slot6.stats[4].stat.name} - {this.props.slot6.stats[4].base_stat}</li>
                    <li>{this.props.slot6.stats[5].stat.name} - {this.props.slot6.stats[5].base_stat}</li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: {this.props.slot6move1 ? this.props.slot6move1.name : null}</p>
                    <p>Type: {this.props.slot6move1 ? this.props.slot6move1.type.name : null}</p>
                    <select onChange={this.handleMoveSelect6_1}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 2: {this.props.slot6move2 ? this.props.slot6move2.name : null}</p>
                    <p>Type: {this.props.slot6move2 ? this.props.slot6move2.type.name : null}</p>
                    <select onChange={this.handleMoveSelect6_2}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 3: {this.props.slot6move3 ? this.props.slot6move3.name : null}</p>
                    <p>Type: {this.props.slot6move3 ? this.props.slot6move3.type.name : null}</p>
                    <select onChange={this.handleMoveSelect6_3}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 4: {this.props.slot6move4 ? this.props.slot6move4.name : null}</p>
                    <p>Type: {this.props.slot6move4 ? this.props.slot6move4.type.name : null}</p>
                    <select onChange={this.handleMoveSelect6_4}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                </div>
            </div> 
            : null
            }
            <Link to="/NewTeam">Create Team</Link>
        </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
      slot1: store.slot1,
      slot2: store.slot2,
      slot3: store.slot3,
      slot4: store.slot4,
      slot5: store.slot5,
      slot6: store.slot6,
      slot1move1: store.slot1move1,
      slot1move2: store.slot1move2,
      slot1move3: store.slot1move3,
      slot1move4: store.slot1move4,
      slot2move1: store.slot2move1,
      slot2move2: store.slot2move2,
      slot2move3: store.slot2move3,
      slot2move4: store.slot2move4,
      slot3move1: store.slot3move1,
      slot3move2: store.slot3move2,
      slot3move3: store.slot3move3,
      slot3move4: store.slot3move4,
      slot4move1: store.slot4move1,
      slot4move2: store.slot4move2,
      slot4move3: store.slot4move3,
      slot4move4: store.slot4move4,
      slot5move1: store.slot5move1,
      slot5move2: store.slot5move2,
      slot5move3: store.slot5move3,
      slot5move4: store.slot5move4,
      slot6move1: store.slot6move1,
      slot6move2: store.slot6move2,
      slot6move3: store.slot6move3,
      slot6move4: store.slot6move4,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      LogIn: (loggedInUser) => {
        dispatch({ type: 'LOGIN_CURRENT_USER', user: loggedInUser })
      },
      AddSlot1Move1: (move) => {
        dispatch({ type: "Add_slot1_move1", slot1move1: move })
      },
      AddSlot1Move2: (move) => {
        dispatch({ type: "Add_slot1_move2", slot1move2: move })
      },
      AddSlot1Move3: (move) => {
        dispatch({ type: "Add_slot1_move3", slot1move3: move })
      },
      AddSlot1Move4: (move) => {
        dispatch({ type: "Add_slot1_move4", slot1move4: move })
      },
      AddSlot2Move1: (move) => {
        dispatch({ type: "Add_slot2_move1", slot2move1: move })
      },
      AddSlot2Move2: (move) => {
        dispatch({ type: "Add_slot2_move2", slot2move2: move })
      },
      AddSlot2Move3: (move) => {
        dispatch({ type: "Add_slot2_move3", slot2move3: move })
      },
      AddSlot2Move4: (move) => {
        dispatch({ type: "Add_slot2_move4", slot2move4: move })
      },
      AddSlot3Move1: (move) => {
        dispatch({ type: "Add_slot3_move1", slot3move1: move })
      },
      AddSlot3Move2: (move) => {
        dispatch({ type: "Add_slot3_move2", slot3move2: move })
      },
      AddSlot3Move3: (move) => {
        dispatch({ type: "Add_slot3_move3", slot3move3: move })
      },
      AddSlot3Move4: (move) => {
        dispatch({ type: "Add_slot3_move4", slot3move4: move })
      },
      AddSlot4Move1: (move) => {
        dispatch({ type: "Add_slot4_move1", slot4move1: move })
      },
      AddSlot4Move2: (move) => {
        dispatch({ type: "Add_slot4_move2", slot4move2: move })
      },
      AddSlot4Move3: (move) => {
        dispatch({ type: "Add_slot4_move3", slot4move3: move })
      },
      AddSlot4Move4: (move) => {
        dispatch({ type: "Add_slot4_move4", slot4move4: move })
      },
      AddSlot5Move1: (move) => {
        dispatch({ type: "Add_slot5_move1", slot5move1: move })
      },
      AddSlot5Move2: (move) => {
        dispatch({ type: "Add_slot5_move2", slot5move2: move })
      },
      AddSlot5Move3: (move) => {
        dispatch({ type: "Add_slot5_move3", slot5move3: move })
      },
      AddSlot5Move4: (move) => {
        dispatch({ type: "Add_slot5_move4", slot5move4: move })
      },
      AddSlot6Move1: (move) => {
        dispatch({ type: "Add_slot6_move1", slot6move1: move })
      },
      AddSlot6Move2: (move) => {
        dispatch({ type: "Add_slot6_move2", slot6move2: move })
      },
      AddSlot6Move3: (move) => {
        dispatch({ type: "Add_slot6_move3", slot6move3: move })
      },
      AddSlot6Move4: (move) => {
        dispatch({ type: "Add_slot6_move4", slot6move4: move })
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);