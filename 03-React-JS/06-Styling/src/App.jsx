// import React, { useEffect, useState } from 'react'
// import Card from './component/Card'

// const App = () => {
//   const [username, setUsername] = useState("Abdullah")
//   const [toggle, setToggle] = useState(true)

//   const [count, setCount] = useState(0)


//   useEffect(() => {
//     console.log(
//       'use effect is running'
//     )
//   },[count])
//   return (
//     <>
//       <h1>Hello world {username}</h1>
//       <p>Lorem ipsum dolor sit amet {username} adipisicing elit. Nemo id distinctio voluptate nam provident. {username} sint, {username} {username} est, illo officia, possimus quae quos non sit {username} {username} officiis quod?</p>
//       <button onClick={() => setUsername(username === "abdullah" ? "usman" : "abdullah")}>change username {username}</button> <br /> <br />
//       <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
//       {toggle && <Card />}
//       <h1>{count}</h1>
//       <button onClick={() => setCount((pre) => pre + 1)}>Increase</button>
//     </>
//   )
// }

// export default App

// use state
// component
// use effect with api calling
// custom hook
// children to parent & parent to children
// Material UI + bootstrap
// Tailwind css + daisy ui


// import axios from 'axios'
// import  { useEffect, useState } from 'react'

// const App = () => {
//   const [data , setData] = useState(null)
//   const [loading , setLoading] = useState(true)
//   const [error , setError] = useState(false)
//   useEffect(()=>{
//     axios('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//       console.log(res.data);
//       setData(res.data)

//     }).catch(err => {
//       console.log(err);
//       setError(true)

//     }).finally(()=>{
//       setLoading(false)
//     })
//   } , [])
//   return (
//     <>
//     {loading && <h1>Loading...</h1>}
//     {error && <h1>error occured...</h1>}
//     {data && data.map(item => {
//       return <h1 key={item.id}>{item.name}</h1>
//     })}
//     <h1>Hello world</h1>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import useFetch from './hooks/useFetch'

// const App = () => {
//   const [loading, data, error] = useFetch('https://jsonplaceholder.typicode.com/users')
//   return (
//     <>
//       <h1>Hello world</h1>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>error occured...</h1>}
//       {data && data.map(item => {
//         return <h1 key={item.id}>{item.name}</h1>
//       })}
//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'
// import Card from './component/Card'
// import useFetch from './hooks/useFetch'
// import axios from 'axios'

// const App = () => {
//   // const [data , setData] = useState(null)
//   // const getDataFromChildren = (data)=>{
//   //   console.log("data is in parent ==> " , data);
//   //   setData(data)

//   const [products , setProducts] = useFetch('https://dummyjson.com/products')


//   console.log(products)

//   }
//   return (
//     <>
//     {/* <h1>Hello world</h1>
//     <input type="checkbox" value="synthwave" className="toggle theme-controller" />

//     <div className="darkcard bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="darkcard-body">
//     <h2 className="darkcard-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="darkcard-actions justify-end">
//       <button className="darkbtn darkbtn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//     <Card title={"iphone 14 pro"} desc={"best mobile phone"} func={getDataFromChildren}/>
//     {data && data.map(item =>{
//       return <h1 className='text-center text-2xl font-bold bg-blue-400 my-2 mx-5 rounded-2xl cursor-pointer hover:bg-blue-600 text-white' key={item.id}>{item.name}</h1>
//     })} */}
//     </>
//   )
// }

// export default App





// Material UI + bootstrap
// Tailwind css + daisy ui


import React from 'react'
import Card from './component/Card'
import useFetch from './hooks/useFetch'

const App = () => {
  const [loading, data, error] = useFetch('https://dummyjson.com/products')
  console.log(data);

  return (
    <>
      <h1 className='text-center bg-red-300 hover:bg-red-500 text-4xl p-5 m-5'>Hello world</h1>

      {loading && <span className="loading loading-spinner loading-xl"></span>}

      {error && <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>}


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.products.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              desc={item.description}
              img={item.images[0]}
            />
          ))}
      </div>
    </>
  )
}

export default App