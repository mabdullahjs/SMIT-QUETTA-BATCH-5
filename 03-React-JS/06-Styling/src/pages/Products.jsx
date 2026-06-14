import React from 'react'
import useFetch from '../hooks/useFetch'

const Products = () => {
    return (
        <div><div className="darkcard bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="darkcard-body">
                <h2 className="darkcard-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="darkcard-actions justify-end">
                    <button className="darkbtn darkbtn-primary">Buy Now</button>
                </div>
            </div>
        </div></div>
    )
}

export default Products