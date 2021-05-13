import { Types } from '../constants/actionTypes';

const initialState = {
    formSubmitted: false
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case Types.FORM_SUBMITION_STATUS: 
        return {
            ...state,
            formSubmitted: action.payload.status
        }        

        default:
            return state;
    }
}

export default reducer;