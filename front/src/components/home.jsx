import { useContext, useEffect } from "react"
import { Link, replace, useNavigate } from "react-router-dom"
import { ContextGlobal } from "../context"
import globalStore from "../reduce/global-store"

export default () =>{
    const con = useContext(ContextGlobal)
    const store = globalStore()
    const navigate = useNavigate()
    console.log(con, 'home')

    function renderHello(){
        if(store.logFT){
            return 'спасибо за ваше доверие'
        }
        else{
            return 'зарегатся внизу'
        }
    }

    function renderButton(){
        if(store.logFT){
            return (
                <button onClick={() => navigate('/posts' )} className="Div">погнали к просмотру контента!</button>
            )
        }
        else{
            return(
                <Link className="LinkB" to="/reg">
                    <div className="Div">погнали</div>
                </Link>
            )
        }
    }

    return(
        <div className="Home">
            <h1>Home</h1>
            <h2>{renderHello()}</h2>
                {renderButton()}
        </div>
    )
}