import React, { Component } from 'react';


class PokeCard extends Component {

    state={
        pokemon: {}
    }

    // async getImg(){
    //     const pokenum = this.props.pokemon.url.slice(34, 36)
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}`)
    //     const json = await response.json()
    //     console.log(json)
    //     return (
    //         <img src={json.sprites.front_default} />
    //     )
    // }

    async componentWillMount(){
        const pokenum = this.props.pokemon.url.slice(34, 36)
        // console.log(pokenum)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}`)
        const json = await response.json()
        this.setState({pokemon: json})
    }
    render () {
        // console.log(this.state.pokemon.sprites)
        return (
        <div className="container" >
            <h1>Name: {this.state.pokemon.name}</h1>
            {/* {this.getImg()}     */}
        </div>
        );
    }
}

export default PokeCard;