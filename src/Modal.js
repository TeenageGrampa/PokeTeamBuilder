import React from  'react'
import { connect } from 'react-redux'




class Modal extends React.Component{

    state= {
    }
    
    handleClick = () => {
        this.props.hideModal(this.props.number)
    }

    render(){
        console.log(this.props)
        return(
            <div className="modal-background" style={{zIndex: 600, }}>
                <div className="modal-card">
                    <div className="modal-card-body floating" style={{marginTop: '25%', borderStyle: 'ridge', boxShadow: '10px 10px 18px -5px rgba(0,0,0,0.75)', borderRadius: 10}}>
                    <h2 className="modal-title" style={{textAlign: 'center', color: 'black'}}>{this.props.move.name}</h2><br></br>
                    <p>{this.props.move.damage_class.name}</p>
                    <p>Type: {this.props.move.type.name}</p>
                    {this.props.move.accuracy ? <p>accuracy: {this.props.move.accuracy}</p> : null}
                    {this.props.move.power ? <p>power: {this.props.move.power}</p> : null}
                    {this.props.move.effect_entries ? <p>{this.props.move.effect_entries[0].effect}</p> : null}
                    <p>{this.props.move.pp}</p>
                    <button onClick={this.handleClick}>close</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
      currentUser: store.currentUser,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      LogIn: (loggedInUser) => {
        dispatch({ type: 'LOGIN_CURRENT_USER', user: loggedInUser })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);