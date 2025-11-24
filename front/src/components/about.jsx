import { useStore } from "../reduce/store.jsx"

export default function About() {
    const co = useStore()
    
    return (
        <>
            <div className="dede">
                <h1>About</h1>
            </div>
            <div className="animation">
                <div className="animationLaude1"></div>
                <div className="animationLaude2"></div>
                <div className="animationLaude3"></div>
                <div className="animationLaude4"></div>
            </div>
            
            <button onClick={co.setCount}>+1</button>
            <div>{co.count}</div>
            <button onClick={co.resetCount}>RESET</button>
        </>
    )
}