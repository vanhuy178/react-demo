import React from 'react'

// function thì dùng biến global để truy cập được ở nhiều nơi

const state = {
    name: 'Nguyen Van Huy function',
    title: 'React Function'
}
export default function DataFunction() {
    return (
        <div>
            <h1>{state.name}</h1>
            <p>{state.title}</p>
        </div>
    )
}
