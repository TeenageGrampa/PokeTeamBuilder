

export default rootReducer;

function rootReducer( state = {}, action){
    switch(action.type){
        case "LOGIN_CURRENT_USER":
            return {...state, currentUser: action.user}
        case "Add_to_team_slot_1":
            return {...state, slot1: action.slot1}
        case "Add_to_team_slot_2":
            return {...state, slot2: action.slot2}
        case "Add_to_team_slot_3":
            return {...state, slot3: action.slot3}
        case "Add_to_team_slot_4":
            return {...state, slot4: action.slot4}
        case "Add_to_team_slot_5":
            return {...state, slot5: action.slot5}
        case "Add_to_team_slot_6":
            return {...state, slot6: action.slot6}
        case "Add_slot1_move1":
            return {...state, slot1move1: action.slot1move1}
        case "Add_slot1_move2":
            return {...state, slot1move2: action.slot1move2}
        case "Add_slot1_move3":
            return {...state, slot1move3: action.slot1move3}
        case "Add_slot1_move4":
            return {...state, slot1move4: action.slot1move4}
        case "Add_slot2_move1":
            return {...state, slot2move1: action.slot2move1}
        case "Add_slot2_move2":
            return {...state, slot2move2: action.slot2move2}
        case "Add_slot2_move3":
            return {...state, slot2move3: action.slot2move3}
        case "Add_slot2_move4":
            return {...state, slot2move4: action.slot2move4}
        case "Add_slot3_move1":
            return {...state, slot3move1: action.slot3move1}
        case "Add_slot3_move2":
            return {...state, slot3move2: action.slot3move2}
        case "Add_slot3_move3":
            return {...state, slot3move3: action.slot3move3}
        case "Add_slot3_move4":
            return {...state, slot3move4: action.slot3move4}
        case "Add_slot4_move1":
            return {...state, slot4move1: action.slot4move1}
        case "Add_slot4_move2":
            return {...state, slot4move2: action.slot4move2}
        case "Add_slot4_move3":
            return {...state, slot4move3: action.slot4move3}
        case "Add_slot4_move4":
            return {...state, slot4move4: action.slot4move4}
        case "Add_slot5_move1":
            return {...state, slot5move1: action.slot5move1}
        case "Add_slot5_move2":
            return {...state, slot5move2: action.slot5move2}
        case "Add_slot5_move3":
            return {...state, slot5move3: action.slot5move3}
        case "Add_slot5_move4":
            return {...state, slot5move4: action.slot5move4}
        case "Add_slot6_move1":
            return {...state, slot6move1: action.slot6move1}
        case "Add_slot6_move2":
            return {...state, slot6move2: action.slot6move2}
        case "Add_slot6_move3":
            return {...state, slot6move3: action.slot6move3}
        case "Add_slot6_move4":
            return {...state, slot6move4: action.slot6move4}
        case "Add_slot1_item":
            return {...state, slot1Item: action.slot1Item}
        case "Add_slot2_item":
            return {...state, slot2Item: action.slot2Item}
        case "Add_slot3_item":
            return {...state, slot3Item: action.slot3Item}
        case "Add_slot4_item":
            return {...state, slot4Item: action.slot4Item}
        case "Add_slot5_item":
            return {...state, slot5Item: action.slot5Item}
        case "Add_slot6_item":
            return {...state, slot6Item: action.slot6Item}
        default: 
        return state
    }
}

  