import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"


const Products = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then((res) => {
                setProducts(res.data.products)
                console.log(res.data.products)
            }).catch(() => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        card: {
            width: '120px', // Exact requested width
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eaeaea',
            margin: '10px',
            boxSizing: 'border-box'
        },
        imageContainer: {
            width: '100%',
            height: '100px', // Reduced height to look proportional at 120px wide
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6px',
            boxSizing: 'border-box',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        },
        content: {
            padding: '8px', // Tighter padding for micro layouts
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            flexGrow: 1,
        },
        // Changed from space-between row to a column layout to avoid text overlapping
        metaColumn: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
        },
        title: {
            fontSize: '12px', // Compact font size
            fontWeight: '600',
            color: '#1a1a1a',
            margin: '0',
            lineHeight: '1.2',
            display: '-webkit-box',
            WebkitLineClamp: '2', // Cuts off title cleanly after 2 lines
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        },
        price: {
            fontSize: '13px',
            fontWeight: '700',
            color: '#2e7d32',
            margin: '2px 0 0 0',
        },
        stockBadge: {
            fontSize: '10px',
            fontWeight: '500',
            color: '#666',
            backgroundColor: '#f0f0f0',
            padding: '2px 6px',
            borderRadius: '4px',
            alignSelf: 'flex-start',
        },
        description: {
            fontSize: '11px',
            color: '#666666',
            lineHeight: '1.3',
            margin: '0',
            display: '-webkit-box',
            WebkitLineClamp: '2', // Strict 2-line limit for micro viewports
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        },
        // Stacked buttons vertically because 120px leaves no room for side-by-side buttons
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            marginTop: 'auto', // Pushes buttons to the exact bottom of the card
        },
        seeMoreBtn: {
            width: '100%',
            padding: '5px 0',
            backgroundColor: 'transparent',
            color: '#555',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        },
        addToCartBtn: {
            width: '100%',
            padding: '6px 0',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
        }
    };
    return (
        <div>
            <h1>Products</h1>

            {
                loading && <h1>Loading..</h1>
            }
            {
                error && <h1>Error Occured</h1>
            }
            {
                products.length > 0 && products.map((product) => {
                    return <div key={product.id} style={styles.container}> 
                    
                    <div style={styles.card} >
                        {/* Product Image */}
                        <div style={styles.imageContainer}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={styles.image}
                            />
                        </div>

                        {/* Product Details */}
                        <div style={styles.content}>
                            <div style={styles.headerRow}>
                                <h3 style={styles.title}>{product.title}</h3>
                                <span style={styles.price}>${product.price}</span>
                            </div>

                            {/* Stock Information */}
                            <span style={styles.stockBadge}>
                                {product.stock} units left in stock
                            </span>

                            <p style={styles.description}>
                                {product.description}
                            </p>

                            {/* Action Buttons */}
                            <div style={styles.buttonContainer}>
                                <button
                                    style={styles.seeMoreBtn}
                                   onClick={() => navigate(`/products/${product.id}`)}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                                        e.currentTarget.style.borderColor = '#999';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = '#ccc';
                                        
                                    }}
                                >
                                    See More
                                </button>

                                <button
                                    style={styles.addToCartBtn}
                                    onClick={() => alert('Added to cart!')}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333333'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000000'}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
</div>
                })
            }

        </div>
    )
}

export default Products