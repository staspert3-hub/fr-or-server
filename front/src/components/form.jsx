import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Form({state , sear, checked1}) {
    const [checked, setChecked] = useState(checked1)
    const [search, setSearch] = useState(sear)


    function handleSubmit(event) {
        event.preventDefault()

        let params = {}

        if(search) params.search = search
        if(checked) params.cheket = checked

       state(params)
    }

    return (
        <form onSubmit={handleSubmit} className="Form">
            <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <label>
                <input type="checkbox" name='checked' checked={checked} onChange={(event) =>  setChecked(!checked)} />
                    <span style={{marginLeft:'15px'}} >new</span>
            </label>
            <button style={{marginLeft:'25px'}} className='b' onSubmit={handleSubmit}>поиск</button>
        </form>
    )
}