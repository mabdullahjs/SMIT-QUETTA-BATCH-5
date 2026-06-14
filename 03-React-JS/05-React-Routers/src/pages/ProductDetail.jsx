import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

const ProductDetail = () => {


  const { id } = useParams();
  const [product, setProduct] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        console.log(res.data)
      }).catch(() => {
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [id])



  return (
    <div>

      {
        loading && <h1>Loading...</h1>
      }
      {
        error && <h1>Error Occured</h1>
      }
      {
  product && (
    <div style={{
      maxWidth: '800px',
      margin: '30px auto',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      alignItems: 'center',
      border: '1px solid #f0f0f0',
      flexWrap: 'wrap' // Ensures responsiveness on smaller screens
    }}>
      
      {/* Product Image Wrapper */}
      <div style={{
        flex: '1 1 250px',
        height: '250px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        boxSizing: 'border-box'
      }}>
        <img 
          src={product.thumbnail} 
          alt={product.title || "Product Image"} 
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>

      {/* Product Info Content */}
      <div style={{
        flex: '2 1 350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Category Tag */}
        <span style={{
          alignSelf: 'flex-start',
          backgroundColor: '#e6f7ff',
          color: '#1890ff',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: '6px',
          letterSpacing: '0.5px'
        }}>
          {product.category}
        </span>

        {/* Product Title */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0',
          lineHeight: '1.2'
        }}>
          {product.title} {/* Changed from .name to match dummyjson schema */}
        </h1>

        {/* Price Tag */}
        <p style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#2e7d32',
          margin: '0'
        }}>
          ${product.price}
        </p>

        {/* Divider */}
        <hr style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#eaeaea',
          margin: '4px 0'
        }} />

        {/* Description */}
        <p style={{
          fontSize: '15px',
          color: '#555555',
          lineHeight: '1.6',
          margin: '0'
        }}>
          {product.description}
        </p>
      </div>

    </div>
  )
}



    </div>
  )
}

export default ProductDetail