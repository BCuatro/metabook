import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";



const _nullSession =  Object.freeze({ id: null});

const SessionReducer =(state = _nullSession, action) =>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
            
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state
    }
}

export default SessionReducer
