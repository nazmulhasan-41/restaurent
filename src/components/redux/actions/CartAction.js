export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART';
export const SET_USER='SET_USER';
export const SET_SUCCESS_ORDER='SET_SUCCESS_ORDER';
export const EMPTY_CART='EMPTY_CART';
export const INC_COUNT='INC_COUNT';
export const DEC_COUNT='DEC_COUNT';
export const DECREASE_COUNT='DECREASE_COUNT';

export  const  addToCart=(id)=>{
    
    return {type:ADD_TO_CART, id}

}
export  const  removeFromCart=(id)=>{
    return {type:REMOVE_FROM_CART, id}

}
export const setUser=(userVar)=>{
    return {type:SET_USER, userVar}
}

export const setSuccessOrder=(order)=>{
    
    return {type:SET_SUCCESS_ORDER, order}
}
export const emptyCart=()=>{
    
    return {type: EMPTY_CART}
}
export const incCount=(pdId)=>{
    
    return {type:INC_COUNT,pdId}
}

export const decCount=(pdId)=>{
    return {type: DECREASE_COUNT, pdId}
}

