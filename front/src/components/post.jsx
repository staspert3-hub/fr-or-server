import {Await, defer, useLoaderData, useParams , useNavigate} from "react-router-dom"
import React, {Suspense} from 'react'
import globalStore from "../reduce/global-store"

export default function Post() {
    const {id , post} = useLoaderData()
    const navigate = useNavigate()
    const globalStore2 = globalStore(state => state.logFT)

    if (!globalStore2) navigate('/')

    function back() {
        navigate(-1)
    }

    return (
        <>
            <button className="PB" onClick={back}>назад</button>
            <div className="post">
                <h1>Post {id}</h1>
                <Suspense fallback={<div className="loy"/>}>
                    <Await resolve={post}>
                        {(data) =>{
                            console.log(data)
                            return (
                                <div className="DD">
                                    <h1>{data.title}</h1>
                                    <p>{data.body}</p>
                                </div>
                            )
                        }}
                    </Await>
                </Suspense>
            </div>
        </>
        
    )
}

export function action({params}) {
    console.log(params.id)

    async function getPost() {
        try {
            const response = await fetch(`https://server2-4.onrender.com/posts/${params.id}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    return defer({
        id: params.id,
        post: getPost(),
    });
}