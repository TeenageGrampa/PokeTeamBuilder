

export default rootReducer;

function rootReducer( state = {}, action){
    switch(action.type){
        case "LOGIN_CURRENT_USER":
            return {...state, currentUser: action.user}
        default: 
        return state
    }
}

  