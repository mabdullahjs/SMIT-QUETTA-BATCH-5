import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useDispatch } from 'react-redux'

const Products = () => {
  const [loading , data , error] = useFetch('https://fakestoreapi.com/products')
  
 
  return (
    <>
      <div>Products</div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error occured</h1>}
      {data && data.map(item => {
        return <Card key={item.id} item={item}/>
      })}
    </>

  )
}

export default Products