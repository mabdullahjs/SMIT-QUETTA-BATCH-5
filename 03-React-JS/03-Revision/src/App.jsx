// import { useState , useEffect } from "react"

// // import Card from './components/Card'

// const App = () => {

//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(false)

//   useEffect(() => {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         console.log(data)
//         setUsers(data)
//       })
//       .catch((err) => {
//         console.log(err)
//         setError(true)
//       }).finally(() => {
//         setLoading(false)
//       })


//   }, [])


//   // const [show, setShow] = useState(true)
//   return (
//     <>

//       {
//         loading && <h1>Loading...</h1>
//       }

//       {
//         error && <h1>Error Occured</h1>
//       }

//       {
//         users.length > 0 && users.map((item) => {
//           return <div key={item.id}>
//             <h1>{item.name}</h1>
//             <p>{item.phone}</p>
//             <p>{item.username}</p>
//           </div>
//         })
//       }

//       {/* <Card name="Abdul salam" email='abdul@gmail.com' /> */}

//       {/* <button onClick={() => setShow(!show)}>

//         toggle component
//       </button>
//       {
//         show && <Card />
//       } */}
//     </>
//   )
// }

// export default App




// import axios from 'axios'
// import React, { useEffect } from 'react'

// const App = () => {
//   useEffect(() => {
//     // axios('https://jsonplaceholder.typicode.com/users')
//     //   .then(res => {
//     //     console.log(res.data);

//     //   }).catch(err =>{
//     //     console.log(err);

//     //   })


//     async function getData(){
//       try {
//         const res = await axios('https://jsonplaceholder.typicode.com/users')
//         console.log(res.data)
//       } catch (error) {
//         console.log(error);

//       }
//     }

//     getData()
//   }, [])
//   return (
//     <h1>App</h1>
//   )
// }

// export default App






// import axios from 'axios'
// import { useEffect, useState } from 'react'

// const App = () => {
//   const [loading , setLoading] = useState(true);
//   const [users , setUsers] = useState(null);
//   const [error , setError] = useState(false);
//   useEffect(() => {

//     async function getData(){
//       try {
//         const res = await axios('https://jsonplaceholder.typicode.com/users')
//         console.log(res.data)
//         setUsers(res.data)
//       } catch (error) {
//         console.log(error , "error occured");
//         setError(true)

//       } finally {
//         setLoading(false)
//       }
//     }

//     getData()
//   }, [])
//   return (
//     <>
//     <h1>App</h1>
//     {/* {loading ? <h1>Loading...</h1> : null} */}
//     {loading && <h1>Loading...</h1> }
//     {users && users.map(item =>{ 
//       return <div key={item.id}>
//         <h3>{item.name}</h3>
//         <hr />
//       </div>
//     })}
//     {error && <h1>Error occured</h1>}

//     </>
//   )
// }

// export default App



// falsy values in js



import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        console.log(res.data);
        setQuestions(res.data)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])


  const changeQuestion = () => {
    if (questionNumber < questions.length - 1){
      setQuestionNumber(questionNumber + 1)
    }else {
      alert("question khtm hogaye")
    }
  }
  return (
    <>
      <h1>Quiz App</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error Occured</h1>}
      {questions && <h1>Q{questionNumber + 1} {questions[questionNumber].question.text}</h1>}
      <button onClick={changeQuestion}>next</button>
    </>
  )
}

export default App