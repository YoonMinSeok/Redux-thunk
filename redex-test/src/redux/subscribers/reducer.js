import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./type"

const initalState = {
    count : 370
}
const subscribersReducer = (state=initalState, action) =>{
    switch(action.type){
        case ADD_SUBSCRIBER :
            return{
                ...state,
                count : state.count +1
            }
        case REMOVE_SUBSCRIBER : 
            return{
                ...state,
                count : state.count -1
            }
        default: return state
    }
}

export default subscribersReducer;