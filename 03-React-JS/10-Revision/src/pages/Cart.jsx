import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const selector = useSelector(selector => selector.cart)
  return (
    <>
    <h1>Cart</h1>
    {selector.map(item => {
      return <h4>{item.title}</h4>
    })}
    </>
  )
}

export default Cart