import Footer from "./footer.jsx";
import Heder from "./heder.jsx";
import {Outlet} from "react-router-dom"

function Outline(){

    return(
        <>
            <Heder/>
            <div style={{marginTop:'120px'}}>
                <Outlet/>
            </div> 
        </>
    )
}

export default Outline;