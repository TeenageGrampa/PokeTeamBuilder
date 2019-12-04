import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Modal from './Modal'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class HomePage extends Component {

    state={
        AllPokemon: [],
        teamTypes: [],
        modal1_1: false,
        modal1_2: false,
        modal1_3: false,
        modal1_4: false,
        modal2_1: false,
        modal2_2: false,
        modal2_3: false,
        modal2_4: false,
        modal3_1: false,
        modal3_2: false,
        modal3_3: false,
        modal3_4: false,
        modal4_1: false,
        modal4_2: false,
        modal4_3: false,
        modal4_4: false,
        modal5_1: false,
        modal5_2: false,
        modal5_3: false,
        modal5_4: false,
        modal6_1: false,
        modal6_2: false,
        modal6_3: false,
        modal6_4: false,
        slot1stat1: 0,
        slot1stat2: 0,
        slot1stat3: 0,
        slot1stat4: 0,
        slot1stat5: 0,
        slot1stat6: 0,
        slot2stat1: 0,
        slot2stat2: 0,
        slot2stat3: 0,
        slot2stat4: 0,
        slot2stat5: 0,
        slot2stat6: 0,
        slot3stat1: 0,
        slot3stat2: 0,
        slot3stat3: 0,
        slot3stat4: 0,
        slot3stat5: 0,
        slot3stat6: 0,
        slot4stat1: 0,
        slot4stat2: 0,
        slot4stat3: 0,
        slot4stat4: 0,
        slot4stat5: 0,
        slot4stat6: 0,
        slot5stat1: 0,
        slot5stat2: 0,
        slot5stat3: 0,
        slot5stat4: 0,
        slot5stat5: 0,
        slot5stat6: 0,
        slot6stat1: 0,
        slot6stat2: 0,
        slot6stat3: 0,
        slot6stat4: 0,
        slot6stat5: 0,
        slot6stat6: 0,
        slot1EVs: 510
    }

    async componentDidMount(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        const json = await response.json()
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
        const filteredWeak = uniqWeakArr.filter((ele) => !this.state.moveTypes.includes(ele))
        const weakdis = filteredWeak.map(type => <li>{type}</li>)
        return weakdis
    }

    handleModal = (move) => {
        this.setState({
            [move]: !this.state[move]
        })
    }

    EvChange1_1 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat1: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else{
        return
      }
      
    }
    EvChange1_2 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat2: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else {
        return
      }
    }
    EvChange1_13 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat3: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else {
        return
      }
    }
    EvChange1_4 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat4: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else {
        return
      }
    }
    EvChange1_5 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat5: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else {
        return
      }
    }
    EvChange1_6 = (e) => {
      if(this.state.slot1EVs > 0){
        this.setState({
          slot1stat6: e,
          slot1Evs: this.state.slot1EVs - e
        })
      } else {
        return
      }
    }

    EvChange2_1 = (e) => {
      this.setState({
        slot2stat1: e
      })
      
    }
    EvChange2_2 = (e) => {
      this.setState({
        slot2stat2: e
      })
      
    }
    EvChange2_13 = (e) => {
      this.setState({
        slot2stat3: e
      })
      
    }
    EvChange2_4 = (e) => {
      this.setState({
        slot2stat4: e
      })
      
    }
    EvChange2_5 = (e) => {
      this.setState({
        slot2stat5: e
      })
      
    }
    EvChange2_6 = (e) => {
      this.setState({
        slot2stat6: e
      })
      
    }

    EvChange3_1 = (e) => {
      this.setState({
        slot3stat1: e
      })
      
    }
    EvChange3_2 = (e) => {
      this.setState({
        slot3stat2: e
      })
      
    }
    EvChange3_13 = (e) => {
      this.setState({
        slot3stat3: e
      })
      
    }
    EvChange3_4 = (e) => {
      this.setState({
        slot3stat4: e
      })
      
    }
    EvChange3_5 = (e) => {
      this.setState({
        slot3stat5: e
      })
      
    }
    EvChange3_6 = (e) => {
      this.setState({
        slot3stat6: e
      })
      
    }

    EvChange4_1 = (e) => {
      this.setState({
        slot4stat1: e
      })
      
    }
    EvChange4_2 = (e) => {
      this.setState({
        slot4stat2: e
      })
      
    }
    EvChange4_13 = (e) => {
      this.setState({
        slot4stat3: e
      })
      
    }
    EvChange4_4 = (e) => {
      this.setState({
        slot4stat4: e
      })
      
    }
    EvChange4_5 = (e) => {
      this.setState({
        slot4stat5: e
      })
      
    }
    EvChange4_6 = (e) => {
      this.setState({
        slot4stat6: e
      })
      
    }

    EvChange5_1 = (e) => {
      this.setState({
        slot5stat1: e
      })
      
    }
    EvChange5_2 = (e) => {
      this.setState({
        slot5stat2: e
      })
      
    }
    EvChange5_13 = (e) => {
      this.setState({
        slot5stat3: e
      })
      
    }
    EvChange5_4 = (e) => {
      this.setState({
        slot5stat4: e
      })
      
    }
    EvChange5_5 = (e) => {
      this.setState({
        slot5stat5: e
      })
      
    }
    EvChange5_6 = (e) => {
      this.setState({
        slot5stat6: e
      })
      
    }

    EvChange6_1 = (e) => {
      this.setState({
        slot6stat1: e
      })
      
    }
    EvChange6_2 = (e) => {
      this.setState({
        slot6stat2: e
      })
      
    }
    EvChange6_13 = (e) => {
      this.setState({
        slot6stat3: e
      })
      
    }
    EvChange6_4 = (e) => {
      this.setState({
        slot6stat4: e
      })
      
    }
    EvChange6_5 = (e) => {
      this.setState({
        slot6stat5: e
      })
      
    }
    EvChange6_6 = (e) => {
      this.setState({
        slot6stat6: e
      })
      
    }
    render () {
      console.log(this.state)
        return (
        <div style={{backgroundImage: `url(https://ih1.redbubble.net/image.236310472.7095/flat,1000x1000,075,f.u2.jpg)`}}>
            <div className="box" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
            <h1 className="title">Welcome</h1>
            {this.props.slot1 && this.props.slot2 && this.props.slot3 && this.props.slot4 && this.props.slot5 && this.props.slot6 ?
            <button onClick={this.handleAnalyze}>Analyze Team</button>
            :null}
            {this.state.teamTypes.length > 0 ? 
            <div className="columns" >
                <div className="column is-4">
                <p>Your Team has the current types:</p>
                <ul>{this.displayTeamTypes()}</ul>
                </div>
                <div className="column is-4">
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
            </div>
            { this.props.slot1 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                        <li>{this.props.slot1.stats[0].stat.name} - {Math.floor(this.props.slot1.stats[0].base_stat + (this.state.slot1stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat1} onChange={this.EvChange1_1}/></li>
                        <li>{this.props.slot1.stats[1].stat.name} - {Math.floor(this.props.slot1.stats[1].base_stat + (this.state.slot1stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat2} onChange={this.EvChange1_2} /></li>
                        <li>{this.props.slot1.stats[2].stat.name} - {Math.floor(this.props.slot1.stats[2].base_stat + (this.state.slot1stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat3} onChange={this.EvChange1_3} /></li>
                        <li>{this.props.slot1.stats[3].stat.name} - {Math.floor(this.props.slot1.stats[3].base_stat + (this.state.slot1stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat4} onChange={this.EvChange1_4}/></li>
                        <li>{this.props.slot1.stats[4].stat.name} - {Math.floor(this.props.slot1.stats[4].base_stat + (this.state.slot1stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat5} onChange={this.EvChange1_5}/></li>
                        <li>{this.props.slot1.stats[5].stat.name} - {Math.floor(this.props.slot1.stats[5].base_stat + (this.state.slot1stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' value={this.state.slot1stat6} onChange={this.EvChange1_6}/></li>
                    </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: </p>{this.props.slot1move1 ? <div><p>{this.props.slot1move1.name}</p><button onClick={() => this.handleModal('modal1_1')}>show more</button></div> : null}
                    {this.state.modal1_1 === true ? 
                    <Modal move={this.props.slot1move1} hideModal={this.handleModal} number='modal1_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect1_1}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 2: </p>{this.props.slot1move2 ? <div><p>{this.props.slot1move2.name}</p><button onClick={() => this.handleModal('modal1_2')}>show more</button></div> : null}
                    {this.state.modal1_2 === true ? 
                    <Modal move={this.props.slot1move2} hideModal={this.handleModal} number='modal1_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect1_2}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 3: </p>{this.props.slot1move3 ? <div><p>{this.props.slot1move3.name}</p><button onClick={() => this.handleModal('modal1_3')}>show more</button></div> : null}
                    {this.state.modal1_3 === true ? 
                    <Modal move={this.props.slot1move3} hideModal={this.handleModal} number='modal1_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect1_3}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                    <p>Move 4: </p>{this.props.slot1move4 ? <div><p>{this.props.slot1move4.name}</p><button onClick={() => this.handleModal('modal1_4')}>show more</button></div> : null}
                    {this.state.modal1_4 === true ? 
                    <Modal move={this.props.slot1move4} hideModal={this.handleModal} number='modal1_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect1_4}>
                    {this.getMoves(this.props.slot1)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot2 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                    <li>{this.props.slot2.stats[0].stat.name} - {Math.floor(this.props.slot2.stats[0].base_stat + (this.state.slot2stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_1}/></li>
                    <li>{this.props.slot2.stats[1].stat.name} - {Math.floor(this.props.slot2.stats[1].base_stat + (this.state.slot2stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_2}/></li>
                    <li>{this.props.slot2.stats[2].stat.name} - {Math.floor(this.props.slot2.stats[2].base_stat + (this.state.slot2stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_3}/></li>
                    <li>{this.props.slot2.stats[3].stat.name} - {Math.floor(this.props.slot2.stats[3].base_stat + (this.state.slot2stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_4}/></li>
                    <li>{this.props.slot2.stats[4].stat.name} - {Math.floor(this.props.slot2.stats[4].base_stat + (this.state.slot2stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_5}/></li>
                    <li>{this.props.slot2.stats[5].stat.name} - {Math.floor(this.props.slot2.stats[5].base_stat + (this.state.slot2stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange2_6}/></li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: </p>{this.props.slot2move1 ? <div><p>{this.props.slot2move1.name}</p><button onClick={() => this.handleModal('modal2_1')}>show more</button></div> : null}
                    {this.state.modal2_1 === true ? 
                    <Modal move={this.props.slot2move1} hideModal={this.handleModal} number='modal2_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect2_1}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 2: </p>{this.props.slot2move2 ? <div><p>{this.props.slot2move2.name}</p><button onClick={() => this.handleModal('modal2_2')}>show more</button></div> : null}
                    {this.state.modal2_2 === true ? 
                    <Modal move={this.props.slot2move2} hideModal={this.handleModal} number='modal2_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect2_2}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 3: </p>{this.props.slot2move3 ? <div><p>{this.props.slot2move3.name}</p><button onClick={() => this.handleModal('modal2_3')}>show more</button></div> : null}
                    {this.state.modal2_3 === true ? 
                    <Modal move={this.props.slot2move3} hideModal={this.handleModal} number='modal2_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect2_3}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                    <p>Move 4: </p>{this.props.slot2move4 ? <div><p>{this.props.slot2move4.name}</p><button onClick={() => this.handleModal('modal2_4')}>show more</button></div> : null}
                    {this.state.modal2_4 === true ? 
                    <Modal move={this.props.slot2move4} hideModal={this.handleModal} number='modal2_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect2_4}>
                    {this.getMoves(this.props.slot2)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot3 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                    <li>{this.props.slot3.stats[0].stat.name} - {Math.floor(this.props.slot3.stats[0].base_stat + (this.state.slot3stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_1}/></li>
                    <li>{this.props.slot3.stats[1].stat.name} - {Math.floor(this.props.slot3.stats[1].base_stat + (this.state.slot3stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_2}/></li>
                    <li>{this.props.slot3.stats[2].stat.name} - {Math.floor(this.props.slot3.stats[2].base_stat + (this.state.slot3stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_3}/></li>
                    <li>{this.props.slot3.stats[3].stat.name} - {Math.floor(this.props.slot3.stats[3].base_stat + (this.state.slot3stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_4}/></li>
                    <li>{this.props.slot3.stats[4].stat.name} - {Math.floor(this.props.slot3.stats[4].base_stat + (this.state.slot3stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_5}/></li>
                    <li>{this.props.slot3.stats[5].stat.name} - {Math.floor(this.props.slot3.stats[5].base_stat + (this.state.slot3stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange3_6}/></li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: </p>{this.props.slot3move1 ? <div><p>{this.props.slot3move1.name}</p><button onClick={() => this.handleModal('modal3_1')}>show more</button></div> : null}
                    {this.state.modal3_1 === true ? 
                    <Modal move={this.props.slot3move1} hideModal={this.handleModal} number='modal3_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect3_1}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 2: </p>{this.props.slot3move2 ? <div><p>{this.props.slot3move2.name}</p><button onClick={() => this.handleModal('modal3_2')}>show more</button></div> : null}
                    {this.state.modal3_2 === true ? 
                    <Modal move={this.props.slot3move2} hideModal={this.handleModal} number='modal3_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect3_2}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 2: </p>{this.props.slot3move3 ? <div><p>{this.props.slot3move3.name}</p><button onClick={() => this.handleModal('modal3_3')}>show more</button></div> : null}
                    {this.state.modal3_3 === true ? 
                    <Modal move={this.props.slot3move3} hideModal={this.handleModal} number='modal3_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect3_3}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                    <p>Move 4: </p>{this.props.slot3move4 ? <div><p>{this.props.slot3move4.name}</p><button onClick={() => this.handleModal('modal3_4')}>show more</button></div> : null}
                    {this.state.modal3_4 === true ? 
                    <Modal move={this.props.slot3move4} hideModal={this.handleModal} number='modal3_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect3_4}>
                    {this.getMoves(this.props.slot3)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot4 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                    <li>{this.props.slot4.stats[0].stat.name} - {Math.floor(this.props.slot4.stats[0].base_stat + (this.state.slot4stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_1}/></li>
                    <li>{this.props.slot4.stats[1].stat.name} - {Math.floor(this.props.slot4.stats[1].base_stat + (this.state.slot4stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_2}/></li>
                    <li>{this.props.slot4.stats[2].stat.name} - {Math.floor(this.props.slot4.stats[2].base_stat + (this.state.slot4stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_3}/></li>
                    <li>{this.props.slot4.stats[3].stat.name} - {Math.floor(this.props.slot4.stats[3].base_stat + (this.state.slot4stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_4}/></li>
                    <li>{this.props.slot4.stats[4].stat.name} - {Math.floor(this.props.slot4.stats[4].base_stat + (this.state.slot4stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_5}/></li>
                    <li>{this.props.slot4.stats[5].stat.name} - {Math.floor(this.props.slot4.stats[5].base_stat + (this.state.slot4stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange4_6}/></li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: </p>{this.props.slot4move1 ? <div><p>{this.props.slot4move1.name}</p><button onClick={() => this.handleModal('modal4_1')}>show more</button></div> : null}
                    {this.state.modal4_1 === true ? 
                    <Modal move={this.props.slot4move1} hideModal={this.handleModal} number='modal4_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect4_1}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 2: </p>{this.props.slot4move2 ? <div><p>{this.props.slot4move2.name}</p><button onClick={() => this.handleModal('modal4_2')}>show more</button></div> : null}
                    {this.state.modal4_2 === true ? 
                    <Modal move={this.props.slot4move2} hideModal={this.handleModal} number='modal4_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect4_2}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 3: </p>{this.props.slot4move3 ? <div><p>{this.props.slot4move3.name}</p><button onClick={() => this.handleModal('modal4_3')}>show more</button></div> : null}
                    {this.state.modal4_3 === true ? 
                    <Modal move={this.props.slot4move3} hideModal={this.handleModal} number='modal4_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect4_3}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                    <p>Move 4: </p>{this.props.slot4move4 ? <div><p>{this.props.slot4move4.name}</p><button onClick={() => this.handleModal('modal4_4')}>show more</button></div> : null}
                    {this.state.modal4_4 === true ? 
                    <Modal move={this.props.slot4move4} hideModal={this.handleModal} number='modal4_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect4_4}>
                    {this.getMoves(this.props.slot4)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot5 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                    <li>{this.props.slot5.stats[0].stat.name} - {Math.floor(this.props.slot5.stats[0].base_stat + (this.state.slot5stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_1}/></li>
                    <li>{this.props.slot5.stats[1].stat.name} - {Math.floor(this.props.slot5.stats[1].base_stat + (this.state.slot5stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_2}/></li>
                    <li>{this.props.slot5.stats[2].stat.name} - {Math.floor(this.props.slot5.stats[2].base_stat + (this.state.slot5stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_3}/></li>
                    <li>{this.props.slot5.stats[3].stat.name} - {Math.floor(this.props.slot5.stats[3].base_stat + (this.state.slot5stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_4}/></li>
                    <li>{this.props.slot5.stats[4].stat.name} - {Math.floor(this.props.slot5.stats[4].base_stat + (this.state.slot5stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_5}/></li>
                    <li>{this.props.slot5.stats[5].stat.name} - {Math.floor(this.props.slot5.stats[5].base_stat + (this.state.slot5stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange5_6}/></li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 1: </p>{this.props.slot5move1 ? <div><p>{this.props.slot5move1.name}</p><button onClick={() => this.handleModal('modal5_1')}>show more</button></div> : null}
                    {this.state.modal5_1 === true ? 
                    <Modal move={this.props.slot5move1} hideModal={this.handleModal} number='modal5_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect5_1}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 2: </p>{this.props.slot5move2 ? <div><p>{this.props.slot5move2.name}</p><button onClick={() => this.handleModal('modal5_2')}>show more</button></div> : null}
                    {this.state.modal5_2 === true ? 
                    <Modal move={this.props.slot5move2} hideModal={this.handleModal} number='modal5_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect5_2}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 3: </p>{this.props.slot5move3 ? <div><p>{this.props.slot5move3.name}</p><button onClick={() => this.handleModal('modal5_3')}>show more</button></div> : null}
                    {this.state.modal5_3 === true ? 
                    <Modal move={this.props.slot5move3} hideModal={this.handleModal} number='modal5_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect5_3}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                    <p>Move 4: </p>{this.props.slot5move4 ? <div><p>{this.props.slot5move4.name}</p><button onClick={() => this.handleModal('modal5_4')}>show more</button></div> : null}
                    {this.state.modal5_4 === true ? 
                    <Modal move={this.props.slot5move4} hideModal={this.handleModal} number='modal5_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect5_4}>
                    {this.getMoves(this.props.slot5)}
                    </select>
                </div>
            </div> 
            : null
            }
            { this.props.slot6 ? 
            <div className="box columns" style={{borderStyle: 'ridge', margin: 20, boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)'}}>
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
                    <li>{this.props.slot6.stats[0].stat.name} - {Math.floor(this.props.slot6.stats[0].base_stat + (this.state.slot6stat1 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_1}/></li>
                    <li>{this.props.slot6.stats[1].stat.name} - {Math.floor(this.props.slot6.stats[1].base_stat + (this.state.slot6stat2 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_2}/></li>
                    <li>{this.props.slot6.stats[2].stat.name} - {Math.floor(this.props.slot6.stats[2].base_stat + (this.state.slot6stat3 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_3}/></li>
                    <li>{this.props.slot6.stats[3].stat.name} - {Math.floor(this.props.slot6.stats[3].base_stat + (this.state.slot6stat4 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_4}/></li>
                    <li>{this.props.slot6.stats[4].stat.name} - {Math.floor(this.props.slot6.stats[4].base_stat + (this.state.slot6stat5 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_5}/></li>
                    <li>{this.props.slot6.stats[5].stat.name} - {Math.floor(this.props.slot6.stats[5].base_stat + (this.state.slot6stat6 / 4))} - EV input <NumericInput min={0} max={252} size='10' onChange={this.EvChange6_6}/></li>
                </ul>
                </div>
                <div className="column is-4">
                    <h1>Moves:</h1>
                    <p>Move 2: </p>{this.props.slot6move1 ? <div><p>{this.props.slot6move1.name}</p><button onClick={() => this.handleModal('modal6_1')}>show more</button></div> : null}
                    {this.state.modal6_1 === true ? 
                    <Modal move={this.props.slot6move1} hideModal={this.handleModal} number='modal6_1'/>
                  : null}
                    <select onChange={this.handleMoveSelect6_1}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 2: </p>{this.props.slot6move2 ? <div><p>{this.props.slot6move2.name}</p><button onClick={() => this.handleModal('modal6_2')}>show more</button></div> : null}
                    {this.state.modal6_2 === true ? 
                    <Modal move={this.props.slot6move2} hideModal={this.handleModal} number='modal6_2'/>
                  : null}
                    <select onChange={this.handleMoveSelect6_2}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 3: </p>{this.props.slot6move3 ? <div><p>{this.props.slot6move3.name}</p><button onClick={() => this.handleModal('modal6_3')}>show more</button></div> : null}
                    {this.state.modal6_3 === true ? 
                    <Modal move={this.props.slot6move3} hideModal={this.handleModal} number='modal6_3'/>
                  : null}
                    <select onChange={this.handleMoveSelect6_3}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                    <p>Move 4: </p>{this.props.slot6move4 ? <div><p>{this.props.slot6move4.name}</p><button onClick={() => this.handleModal('modal6_4')}>show more</button></div> : null}
                    {this.state.modal6_4 === true ? 
                    <Modal move={this.props.slot6move4} hideModal={this.handleModal} number='modal6_4'/>
                  : null}
                    <select onChange={this.handleMoveSelect6_4}>
                    {this.getMoves(this.props.slot6)}
                    </select>
                </div>
            </div> 
            : null
            }
            <Link to="/NewTeam" className="btn">Create Team</Link>
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