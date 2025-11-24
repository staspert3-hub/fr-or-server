import React from 'react'
import {useNavigate, useRouteError} from 'react-router-dom'

export default ()=>{
    const navigate = useNavigate()
    const er = useRouteError()

    return (
        <>
            <div className="divEr">
                упс ошибочка
                <p style={{display:'block'}}>{er.message}</p>
                <button onClick={()=>navigate('/')}>назад</button>
            </div> 
        </>
    )
}