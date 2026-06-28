import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const SingleProduct = () => {
  const {id} = useParams()
  const [loading , data , error] = useFetch(`https://fakestoreapi.com/products/${id}`)
  console.log(data);
  
  return (
    <div>SingleProduct {id}</div>
  )
}

export default SingleProduct