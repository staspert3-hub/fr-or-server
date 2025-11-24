import { useEffect, useState , useRef } from "react"
import { Link , useLocation, useSearchParams} from "react-router-dom";

import Form from './form.jsx'
import { useQuery } from "@tanstack/react-query";
import error from "./error.jsx";

async function fetchPosts(){
    const res = await fetch('https://server2-4.onrender.com/posts')
    if(!res.ok){
        throw Error('http error' + res.status)
    }
    return res.json()
} 

export default () =>{
    const [posts, setPosts] = useState();
    const RefLoyde = useRef('загрузка постов...')
    const [search , setSearch] = useSearchParams()

    const {data , isFetching , isError , error} = useQuery({
        queryKey:['posts'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
        cacheTime : 1000 * 60 * 1,
        retry: 1,
    })

    useEffect(()=>{
        if(isError){
            console.log(error)
        }
    }, [isError])

    const sear = search.get('search')  || ''
    const checked = Boolean(search.get('cheket')) || false

    function renderPost(){
        if(isFetching){ 
            return (
                <div className="animation">
                    <div className="animationLaude1"></div>
                    <div className="animationLaude2"></div>
                    <div className="animationLaude3"></div>
                    <div className="animationLaude4"></div>
                </div>
            )
        }
         
        if(isError) return <p>ошибочка при запросе на сервер</p>

        const posts = data.filter((e) =>{
            if(sear === ''){
                if(checked){
                    return e.id >= 80? true : false
                }
                else{
                    return true
                }
            }
            else{
                if(e.title.includes(sear)){
                    if(checked){
                        return e.id >= 80? true : false
                    }
                    else{
                        return true
                    }
                }
                return false
            }
        }).map((post)=>{
            return <Link key={post.id} className="LinkP" to={`/posts/${post.id}`}>
                <div className="Post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
        })

        return posts
    }

    return(
        <>
            <Form state={setSearch} sear={sear} checked1={checked} />
            {renderPost()}
        </>
    )   
}