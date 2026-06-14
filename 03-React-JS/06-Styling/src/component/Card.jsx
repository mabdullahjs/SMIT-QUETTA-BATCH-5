import axios from 'axios'
import  { useEffect } from 'react'

const Card = ({ title, desc, func }) => {
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                func(res.data)

            }).catch(err => {
                console.log(err);

            })
    }, [])
    return (
        <>

            <h1>{title}</h1>
            <p>{desc}</p>
        </>
    )
}

export default Card