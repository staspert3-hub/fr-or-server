import { useContext } from "react";
import { ContextGlobal } from "../context";
import GlobalStore from '../reduce/global-store.jsx'
import { Navigate } from "react-router-dom";

export default ({children}) =>{
    const gl = GlobalStore(state => state.logFT)
    console.log(gl, 'gl')

    if(gl){
        return children
    }
    else{
        return <Navigate to="/reg" replace/>
    }
}