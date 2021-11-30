import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./type"

export const addSubscriber = () =>{
    return{
        type: ADD_SUBSCRIBER
    }
}

export const removeSubscriber = () =>{
    return{
        type: REMOVE_SUBSCRIBER
    }
}