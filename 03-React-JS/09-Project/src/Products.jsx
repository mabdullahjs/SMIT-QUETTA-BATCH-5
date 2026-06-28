
import { useDispatch } from 'react-redux'
import { products } from './data/products'
import addToCart from './store/slices/cartSlice'

const Products = () => {
    const dispatch = useDispatch();

    function add(item) {
        dispatch(addToCart(item))
        console.log('item added')
    }
    return (
        <>
            <div className='flex justify-center items-center flex-wrap '>


                {
                    products.map((item, index) => {
                        return <div key={item.id} className='m-3'>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.description}</p>
                                    <div className="justify-end card-actions">
                                        <button onClick={() => add(item)} className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Products