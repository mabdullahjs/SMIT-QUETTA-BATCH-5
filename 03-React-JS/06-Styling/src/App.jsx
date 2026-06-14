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



import React, { useState } from 'react'
import Card from './component/Card'

const App = () => {
  const [data , setData] = useState(null)
  const getDataFromChildren = (data)=>{
    console.log("data is in parent ==> " , data);
    setData(data)
    
  }
  return (
    <>
    <h1>Hello world</h1>
    <Card title={"iphone 14 pro"} desc={"best mobile phone"} func={getDataFromChildren}/>
    {data && data.map(item =>{
      return <h1 key={item.id}>{item.name}</h1>
    })}
    </>
  )
}

export default App