import { FETCH_POST, CLEAN_ACTIVE_POST } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POST:
            return action.payload.data;
        case CLEAN_ACTIVE_POST:
            return {};
        default:
            return state;
    }
}