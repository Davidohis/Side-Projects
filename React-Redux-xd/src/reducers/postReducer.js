import {FATCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [],
    newpost: {}
}

export const postReducer = (state = initialState, action) => {
    switch(action.type){
        case FATCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
         case NEW_POST:
            return {
                ...state,
                newpost: action.payload
            } 

        default:
            return state;
    }
}
