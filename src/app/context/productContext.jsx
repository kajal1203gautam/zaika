
'use client'
import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
    data: []
}

const reducer = (state, action)=>{
if(action.type==='LOAD'){
    return {
        ...state, data: action.payload
    }
}else{
    return state
}
}

export const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState );
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}