import React from "react"
console.log('react')

export default async function fetchingPost(newPost) {
    const data = await fetch('https://server2-4.onrender.com/posts' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost),
    })

    if(!data.ok){
        throw Error(data.status)
    }

    return data
}