import React , {createContext , useReducer} from "react";
import reduce from './reduce/reduce.jsx'

export const ContextGlobal = createContext();

const initialState = {
    login:'',
    logFT:false,
}

export default function ContextGlobalProvider({children}){
    const [state , dispatch] = useReducer(reduce , initialState)

    let dataLogin = {
        state: state,
        dispatch: dispatch,

        login: (login) => {
            dispatch({type:'Login', hesh:login})
        },

        logout: () => {
            dispatch({
                type:'logout'
            });
        }
    }

    return (
        <ContextGlobal.Provider value={dataLogin}>
            {children}
        </ContextGlobal.Provider>
    )
}
